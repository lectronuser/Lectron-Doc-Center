#!/usr/bin/env python3

import dbus
import dbus.service
import dbus.mainloop.glib
from gi.repository import GLib
import logging
import signal
import sys

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
log = logging.getLogger(__name__)

AGENT_PATH = "/auto/agent"
AGENT_CAPABILITY = "NoInputNoOutput"


class AutoAgent(dbus.service.Object):

    def __init__(self, bus, manager):
        super().__init__(bus, AGENT_PATH)
        self._manager = manager
        self._loop = None

    def set_loop(self, loop: GLib.MainLoop):
        self._loop = loop

    @dbus.service.method("org.bluez.Agent1", in_signature="", out_signature="")
    def Release(self):
        """Called when BlueZ unregisters the agent."""
        log.info("Agent released by BlueZ")

    @dbus.service.method("org.bluez.Agent1", in_signature="o", out_signature="s")
    def RequestPinCode(self, device):
        """Legacy PIN-based pairing; rarely called with NoInputNoOutput."""
        log.warning("PIN code requested: %s: returning '0000'", device)
        return "0000"

    @dbus.service.method("org.bluez.Agent1", in_signature="o", out_signature="u")
    def RequestPasskey(self, device):
        """Numeric comparison; automatically returns 0 with NoInputNoOutput."""
        log.warning("Passkey requested: %s: returning 0", device)
        return dbus.UInt32(0)

    @dbus.service.method("org.bluez.Agent1", in_signature="os", out_signature="")
    def DisplayPinCode(self, device, pincode):
        log.info("Display PIN: device: %s  pin: %s", device, pincode)

    @dbus.service.method("org.bluez.Agent1", in_signature="ouq", out_signature="")
    def DisplayPasskey(self, device, passkey, entered):
        log.info("Display passkey: device: %s  passkey: %06d  entered: %d",
                 device, passkey, entered)

    @dbus.service.method("org.bluez.Agent1", in_signature="ou", out_signature="")
    def RequestConfirmation(self, device, passkey):
        """Passkey confirmation: automatically approved unless an error is raised."""
        log.info("Confirmation request: device: %s  passkey: %06d: auto-approved",
                 device, passkey)

    @dbus.service.method("org.bluez.Agent1", in_signature="os", out_signature="")
    def AuthorizeService(self, device, uuid):
        """Service authorization: automatically approved unless an error is raised."""
        log.info("Authorize service: device: %s  uuid: %s", device, uuid)

    @dbus.service.method("org.bluez.Agent1", in_signature="o", out_signature="")
    def RequestAuthorization(self, device):
        """Device authorization request."""
        log.info("Authorization request: device: %s", device)

    @dbus.service.method("org.bluez.Agent1", in_signature="", out_signature="")
    def Cancel(self):
        log.info("Pairing request cancelled by BlueZ")

    def unregister(self):
        try:
            self._manager.UnregisterAgent(AGENT_PATH)
            log.info("Agent unregistered from BlueZ")
        except dbus.DBusException as exc:
            log.warning("Failed to unregister agent: %s", exc)

    def shutdown(self, signum=None, frame=None):
        log.info("Shutdown signal received, stopping…")
        self.unregister()
        if self._loop and self._loop.is_running():
            self._loop.quit()


def main():
    dbus.mainloop.glib.DBusGMainLoop(set_as_default=True)

    try:
        bus = dbus.SystemBus()

        manager = dbus.Interface(
            bus.get_object("org.bluez", "/org/bluez"),
            "org.bluez.AgentManager1"
        )

        agent = AutoAgent(bus, manager)
        manager.RegisterAgent(AGENT_PATH, AGENT_CAPABILITY)
        manager.RequestDefaultAgent(AGENT_PATH)
        log.info("Bluetooth auto agent running (capability: %s)", AGENT_CAPABILITY)

        loop = GLib.MainLoop()
        agent.set_loop(loop)

        for sig in (signal.SIGINT, signal.SIGTERM):
            signal.signal(sig, agent.shutdown)

        loop.run()

    except dbus.DBusException as exc:
        log.error("D-Bus error: %s", exc)
        sys.exit(1)


if __name__ == "__main__":
    main()