#!/bin/sh

if [ $# -ne 2 ]; then
    echo "Usage: $0 <GPIO_PIN> <VALUE>"
    echo "VALUE: 0 (low) or 1 (high)"
    exit 1
fi

GPIO_PIN=$1
VALUE=$2

if [ "$VALUE" != "0" ] && [ "$VALUE" != "1" ]; then
    echo "Error: VALUE must be 0 or 1"
    exit 1
fi

GPIO_PATH="/sys/class/gpio/gpio$GPIO_PIN"
if [ ! -d "$GPIO_PATH" ]; then
    echo "$GPIO_PIN" > /sys/class/gpio/export
    sleep 0.1
fi

echo "out" > "$GPIO_PATH/direction"
echo "$VALUE" > "$GPIO_PATH/value"