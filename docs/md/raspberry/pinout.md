# Pinout

This page describes every external connector on the **Lectron Pi5 Autopilot** baseboard: where it is, its connector type, pin assignment and signal levels. Connectors are numbered as in the views below; each number has a matching pinout.

!!! note "Voltage Legend"
    All logic signals are **+3.3V** unless noted otherwise.

    | Symbol | Meaning |
    | :----: | :------ |
    | `+5V` | Peripheral / system 5V rail |
    | `+3.3V` | Logic-level signal (3.3V) |
    | `9-26V` | Main power input range |
    | `0-16V` | Servo rail sense (depends on BEC) |
    | `GND` | Ground |
    | `---` | Not connected / no defined level |

!!! danger "Warning"
    Most logic pins are **3.3V tolerant only**. Do **not** apply 5V logic levels to signal pins, and never source servo/motor power from the peripheral 5V rail.

!!! warning "Power Budget"
    The peripheral 5V rail is shared across all connectors on each side. The **total current** drawn from all **FMU ports** combined must not exceed **1.5 A**. The same **1.5 A** total limit applies to all **CM5 ports** combined. Budget the current across connected peripherals accordingly.

Click a numbered port in the views or one of the buttons below. Pin 1 is drawn as a square; hover a table row to highlight that pin on the connector.

!!! note "Pin 1 Identification"
    On every connector, **Pin 1** is the first row of the table and the square in the connector strip. Use the image below to locate Pin 1 on the physical JST GH connector before wiring.

    ![JST GH Connector Pin Identification](../../images/raspberry/jst_gh_pin1.png){ width="420" }

<div class="pin-explorer" markdown>

<div class="pin-views" markdown>

<figure markdown>

<div class="pin-hotspots" markdown>

![Pi5 Autopilot connectors, front view (1-16, 23)](../../images/raspberry/connectors_front.png){ .lc-drawing }

<div class="pin-spots">
<a class="pin-spot" href="#conn-01" data-conn="01" style="left:18.75%;top:54.15%" aria-label="01 TELEM1" title="01 TELEM1"></a>
<a class="pin-spot" href="#conn-02" data-conn="02" style="left:26.75%;top:60.62%" aria-label="02 TELEM2" title="02 TELEM2"></a>
<a class="pin-spot" href="#conn-03" data-conn="03" style="left:34.85%;top:67.30%" aria-label="03 UART/I2C" title="03 UART/I2C"></a>
<a class="pin-spot" href="#conn-04" data-conn="04" style="left:43.10%;top:73.98%" aria-label="04 GPS2" title="04 GPS2"></a>
<a class="pin-spot" href="#conn-05" data-conn="05" style="left:11.50%;top:56.96%" aria-label="05 I2C" title="05 I2C"></a>
<a class="pin-spot" href="#conn-06" data-conn="06" style="left:20.50%;top:64.14%" aria-label="06 CAN" title="06 CAN"></a>
<a class="pin-spot" href="#conn-07" data-conn="07" style="left:27.75%;top:69.97%" aria-label="07 GPS1" title="07 GPS1"></a>
<a class="pin-spot" href="#conn-08" data-conn="08" style="left:39.50%;top:79.96%" aria-label="08 PPM/SBUS RC" title="08 PPM/SBUS RC"></a>
<a class="pin-spot" href="#conn-09" data-conn="09" style="left:8.50%;top:62.80%" aria-label="09 SPI" title="09 SPI"></a>
<a class="pin-spot" href="#conn-10" data-conn="10" style="left:20.10%;top:71.94%" aria-label="10 I/O PWM OUT" title="10 I/O PWM OUT"></a>
<a class="pin-spot" href="#conn-11" data-conn="11" style="left:31.80%;top:81.79%" aria-label="11 FMU PWM OUT" title="11 FMU PWM OUT"></a>
<a class="pin-spot" href="#conn-12" data-conn="12" style="left:23.40%;top:86.50%" aria-label="12 CM CAN" title="12 CM CAN"></a>
<a class="pin-spot" href="#conn-13" data-conn="13" style="left:43.25%;top:91.07%" aria-label="13 CM SPI / PWM" title="13 CM SPI / PWM"></a>
<a class="pin-spot" href="#conn-14" data-conn="14" style="left:51.85%;top:84.04%" aria-label="14 CM GPIO / UART" title="14 CM GPIO / UART"></a>
<a class="pin-spot" href="#conn-15" data-conn="15" style="left:58.60%;top:79.11%" aria-label="15 FAN" title="15 FAN"></a>
<a class="pin-spot" href="#conn-16" data-conn="16" style="left:60.25%;top:64.35%" aria-label="16 CM I2C" title="16 CM I2C"></a>
<a class="pin-spot" href="#conn-23" data-conn="23" style="left:49.75%;top:69.41%" aria-label="23 CM SWITCH" title="23 CM SWITCH"></a>
</div>

</div>

<figcaption>Front · connectors 1-16, 23</figcaption>
</figure>

<figure markdown>

<div class="pin-hotspots" markdown>

![Pi5 Autopilot connectors, back view (17-22)](../../images/raspberry/connectors_back.png){ .lc-drawing }

<div class="pin-spots">
<a class="pin-spot" href="#conn-17" data-conn="17" style="left:54.00%;top:82.89%" aria-label="17 CM ETH" title="17 CM ETH"></a>
<a class="pin-spot" href="#conn-18" data-conn="18" style="left:63.25%;top:74.64%" aria-label="18 PX4 ETH" title="18 PX4 ETH"></a>
<a class="pin-spot" href="#conn-19" data-conn="19" style="left:75.65%;top:64.40%" aria-label="19 PWR I2C" title="19 PWR I2C"></a>
<a class="pin-spot" href="#conn-20" data-conn="20" style="left:86.85%;top:52.71%" aria-label="20 FMU DEBUG" title="20 FMU DEBUG"></a>
<a class="pin-spot" href="#conn-21" data-conn="21" style="left:94.40%;top:46.22%" aria-label="21 I/O DEBUG" title="21 I/O DEBUG"></a>
<a class="pin-spot" href="#conn-22" data-conn="22" style="left:75.25%;top:50.04%" aria-label="22 PWR IN 3S-6S" title="22 PWR IN 3S-6S"></a>
</div>

</div>

<figcaption>Back · connectors 17-22</figcaption>
</figure>

</div>

<nav class="pin-index" aria-label="Connectors">
<a href="#conn-01" data-conn="01"><b>01</b> TELEM1</a>
<a href="#conn-02" data-conn="02"><b>02</b> TELEM2</a>
<a href="#conn-03" data-conn="03"><b>03</b> UART/I2C</a>
<a href="#conn-04" data-conn="04"><b>04</b> GPS2</a>
<a href="#conn-05" data-conn="05"><b>05</b> I2C</a>
<a href="#conn-06" data-conn="06"><b>06</b> CAN</a>
<a href="#conn-07" data-conn="07"><b>07</b> GPS1</a>
<a href="#conn-08" data-conn="08"><b>08</b> PPM/SBUS RC</a>
<a href="#conn-09" data-conn="09"><b>09</b> SPI</a>
<a href="#conn-10" data-conn="10"><b>10</b> I/O PWM OUT</a>
<a href="#conn-11" data-conn="11"><b>11</b> FMU PWM OUT</a>
<a href="#conn-12" data-conn="12"><b>12</b> CM CAN</a>
<a href="#conn-13" data-conn="13"><b>13</b> CM SPI / PWM</a>
<a href="#conn-14" data-conn="14"><b>14</b> CM GPIO / UART</a>
<a href="#conn-15" data-conn="15"><b>15</b> FAN</a>
<a href="#conn-16" data-conn="16"><b>16</b> CM I2C</a>
<a href="#conn-17" data-conn="17"><b>17</b> CM ETH</a>
<a href="#conn-18" data-conn="18"><b>18</b> PX4 ETH</a>
<a href="#conn-19" data-conn="19"><b>19</b> PWR I2C</a>
<a href="#conn-20" data-conn="20"><b>20</b> FMU DEBUG</a>
<a href="#conn-21" data-conn="21"><b>21</b> I/O DEBUG</a>
<a href="#conn-22" data-conn="22"><b>22</b> PWR IN 3S-6S</a>
<a href="#conn-23" data-conn="23"><b>23</b> CM SWITCH</a>
</nav>

<div class="pin-legend"><span><i class="pin-dot pin-dot--power"></i>Power</span><span><i class="pin-dot pin-dot--gnd"></i>Ground</span><span><i class="pin-dot pin-dot--uart"></i>UART</span><span><i class="pin-dot pin-dot--i2c"></i>I2C</span><span><i class="pin-dot pin-dot--can"></i>CAN</span><span><i class="pin-dot pin-dot--spi"></i>SPI</span><span><i class="pin-dot pin-dot--pwm"></i>PWM</span><span><i class="pin-dot pin-dot--rc"></i>RC</span><span><i class="pin-dot pin-dot--gpio"></i>GPIO</span><span><i class="pin-dot pin-dot--debug"></i>Debug</span><span><i class="pin-dot pin-dot--eth"></i>Ethernet</span><span><i class="pin-dot pin-dot--one pin-dot--nc"></i>Pin 1</span></div>

<div class="pin-sheets">
<section class="pin-sheet" id="conn-01" data-conn="01">
<p class="pin-sheet__eyebrow">01 · Front view · 6 pin</p>
<p class="pin-sheet__title">TELEM1</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART7</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX"></span><span class="pin-dot pin-dot--uart" data-pin="4" title="4 · CTS"></span><span class="pin-dot pin-dot--uart" data-pin="5" title="5 · RTS"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART7 TX</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART7 RX</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">CTS</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART7 CTS</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">RTS</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART7 RTS</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-02" data-conn="02">
<p class="pin-sheet__eyebrow">02 · Front view · 6 pin</p>
<p class="pin-sheet__title">TELEM2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART5</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX"></span><span class="pin-dot pin-dot--uart" data-pin="4" title="4 · CTS"></span><span class="pin-dot pin-dot--uart" data-pin="5" title="5 · RTS"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART5 TX</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART5 RX</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">CTS</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART5 CTS</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">RTS</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART5 RTS</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-03" data-conn="03">
<p class="pin-sheet__eyebrow">03 · Front view · 6 pin</p>
<p class="pin-sheet__title">UART/I2C</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART4 / I2C3</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX"></span><span class="pin-dot pin-dot--i2c" data-pin="4" title="4 · SCL"></span><span class="pin-dot pin-dot--i2c" data-pin="5" title="5 · SDA"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART4 TX</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART4 RX</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SCL</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C3 SCL</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SDA</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C3 SDA</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-04" data-conn="04">
<p class="pin-sheet__eyebrow">04 · Front view · 6 pin</p>
<p class="pin-sheet__title">GPS2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART8 / I2C2</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX"></span><span class="pin-dot pin-dot--i2c" data-pin="4" title="4 · SCL"></span><span class="pin-dot pin-dot--i2c" data-pin="5" title="5 · SDA"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART8 TX</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>UART8 RX</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SCL</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C2 SCL</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SDA</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C2 SDA</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-05" data-conn="05">
<p class="pin-sheet__eyebrow">05 · Front view · 4 pin</p>
<p class="pin-sheet__title">I2C</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>I2C2</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--i2c" data-pin="2" title="2 · SCL"></span><span class="pin-dot pin-dot--i2c" data-pin="3" title="3 · SDA"></span><span class="pin-dot pin-dot--gnd" data-pin="4" title="4 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">SCL</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C2 SCL</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">SDA</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C2 SDA</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-06" data-conn="06">
<p class="pin-sheet__eyebrow">06 · Front view · 4 pin</p>
<p class="pin-sheet__title">CAN</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>FMU CAN</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--can" data-pin="2" title="2 · CAN-H"></span><span class="pin-dot pin-dot--can" data-pin="3" title="3 · CAN-L"></span><span class="pin-dot pin-dot--gnd" data-pin="4" title="4 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">CAN-H</td><td><span class="pin-type pin-type--can">CAN</span></td><td class="pin-level">3.3 V</td><td>CAN High</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">CAN-L</td><td><span class="pin-type pin-type--can">CAN</span></td><td class="pin-level">3.3 V</td><td>CAN Low</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-07" data-conn="07">
<p class="pin-sheet__eyebrow">07 · Front view · 10 pin</p>
<p class="pin-sheet__title">GPS1</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 10 pin</b></div>
<div><span>Interface</span><b>USART1 / I2C1</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX"></span><span class="pin-dot pin-dot--i2c" data-pin="4" title="4 · SCL"></span><span class="pin-dot pin-dot--i2c" data-pin="5" title="5 · SDA"></span><span class="pin-dot pin-dot--gpio" data-pin="6" title="6 · SAFETY SW IN"></span><span class="pin-dot pin-dot--gpio" data-pin="7" title="7 · SAFETY LED"></span><span class="pin-dot pin-dot--power" data-pin="8" title="8 · FC 3.3V"></span><span class="pin-dot pin-dot--gpio" data-pin="9" title="9 · BUZZER(-)"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>USART1 TX</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>USART1 RX</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SCL</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C1 SCL</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SDA</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C1 SDA</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">SAFETY SW IN</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Safety Switch In</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">SAFETY LED</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Safety LED Out</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">FC 3.3V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">3.3 V</td><td>FMU 3.3V</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">BUZZER(-)</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Buzzer (−)</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-08" data-conn="08">
<p class="pin-sheet__eyebrow">08 · Front view · 5 pin</p>
<p class="pin-sheet__title">PPM/SBUS RC</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 5 pin</b></div>
<div><span>Interface</span><b>RC input</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--rc" data-pin="2" title="2 · RC IN"></span><span class="pin-dot pin-dot--nc" data-pin="3" title="3 · NC"></span><span class="pin-dot pin-dot--rc" data-pin="4" title="4 · RC OUT"></span><span class="pin-dot pin-dot--gnd" data-pin="5" title="5 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">RC IN</td><td><span class="pin-type pin-type--rc">RC</span></td><td class="pin-level">3.3 V</td><td>PPM / SBUS Input</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">NC</td><td><span class="pin-type pin-type--nc">NC</span></td><td class="pin-level">—</td><td>Not connected</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">RC OUT</td><td><span class="pin-type pin-type--rc">RC</span></td><td class="pin-level">3.3 V</td><td>RSSI In / SBUS Out</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-09" data-conn="09">
<p class="pin-sheet__eyebrow">09 · Front view · 11 pin</p>
<p class="pin-sheet__title">SPI</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 11 pin</b></div>
<div><span>Interface</span><b>SPI6</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--spi" data-pin="2" title="2 · SCK"></span><span class="pin-dot pin-dot--spi" data-pin="3" title="3 · MISO(RX)"></span><span class="pin-dot pin-dot--spi" data-pin="4" title="4 · MOSI(TX)"></span><span class="pin-dot pin-dot--spi" data-pin="5" title="5 · NCS-1"></span><span class="pin-dot pin-dot--spi" data-pin="6" title="6 · NCS-2"></span><span class="pin-dot pin-dot--spi" data-pin="7" title="7 · SPI SYNC"></span><span class="pin-dot pin-dot--spi" data-pin="8" title="8 · DRDY-1"></span><span class="pin-dot pin-dot--spi" data-pin="9" title="9 · DRDY-2"></span><span class="pin-dot pin-dot--spi" data-pin="10" title="10 · SPI NRST"></span><span class="pin-dot pin-dot--gnd" data-pin="11" title="11 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">SCK</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 SCK</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">MISO(RX)</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 MISO (RX)</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">MOSI(TX)</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 MOSI (TX)</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">NCS-1</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 NCS-1</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">NCS-2</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 NCS-2</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">SPI SYNC</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPIX Sync</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">DRDY-1</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 DRDY-1</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">DRDY-2</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 DRDY-2</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">SPI NRST</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>SPI6 NRST</td></tr>
<tr data-pin="11"><td>11</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-10" data-conn="10">
<p class="pin-sheet__eyebrow">10 · Front view · 10 pin</p>
<p class="pin-sheet__title">I/O PWM OUT</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 10 pin</b></div>
<div><span>Interface</span><b>IO co-processor</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · VDD SERVO"></span><span class="pin-dot pin-dot--pwm" data-pin="2" title="2 · IO CH-1"></span><span class="pin-dot pin-dot--pwm" data-pin="3" title="3 · IO CH-2"></span><span class="pin-dot pin-dot--pwm" data-pin="4" title="4 · IO CH-3"></span><span class="pin-dot pin-dot--pwm" data-pin="5" title="5 · IO CH-4"></span><span class="pin-dot pin-dot--pwm" data-pin="6" title="6 · IO CH-5"></span><span class="pin-dot pin-dot--pwm" data-pin="7" title="7 · IO CH-6"></span><span class="pin-dot pin-dot--pwm" data-pin="8" title="8 · IO CH-7"></span><span class="pin-dot pin-dot--pwm" data-pin="9" title="9 · IO CH-8"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">VDD SERVO</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">0-16 V</td><td>VDD Servo Sens</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">IO CH-1</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH1</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">IO CH-2</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH2</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">IO CH-3</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH3</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">IO CH-4</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH4</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">IO CH-5</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH5</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">IO CH-6</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH6</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">IO CH-7</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH7</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">IO CH-8</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>IO PWM CH8</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-11" data-conn="11">
<p class="pin-sheet__eyebrow">11 · Front view · 10 pin</p>
<p class="pin-sheet__title">FMU PWM OUT</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 10 pin</b></div>
<div><span>Interface</span><b>FMU</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · VDD SERVO"></span><span class="pin-dot pin-dot--pwm" data-pin="2" title="2 · FMU CH-1"></span><span class="pin-dot pin-dot--pwm" data-pin="3" title="3 · FMU CH-2"></span><span class="pin-dot pin-dot--pwm" data-pin="4" title="4 · FMU CH-3"></span><span class="pin-dot pin-dot--pwm" data-pin="5" title="5 · FMU CH-4"></span><span class="pin-dot pin-dot--pwm" data-pin="6" title="6 · FMU CH-5"></span><span class="pin-dot pin-dot--pwm" data-pin="7" title="7 · FMU CH-6"></span><span class="pin-dot pin-dot--pwm" data-pin="8" title="8 · FMU CH-7"></span><span class="pin-dot pin-dot--pwm" data-pin="9" title="9 · FMU CH-8"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">VDD SERVO</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">0-16 V</td><td>VDD Servo Sens</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">FMU CH-1</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH1</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">FMU CH-2</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH2</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">FMU CH-3</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH3</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">FMU CH-4</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH4</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">FMU CH-5</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH5</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">FMU CH-6</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH6</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">FMU CH-7</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH7</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">FMU CH-8</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM CH8</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-12" data-conn="12">
<p class="pin-sheet__eyebrow">12 · Front view · 4 pin</p>
<p class="pin-sheet__title">CM CAN</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>MCP2515 on SPI1-CS0</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--can" data-pin="2" title="2 · CAN-H"></span><span class="pin-dot pin-dot--can" data-pin="3" title="3 · CAN-L"></span><span class="pin-dot pin-dot--gnd" data-pin="4" title="4 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>System 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">CAN-H</td><td><span class="pin-type pin-type--can">CAN</span></td><td class="pin-level">3.3 V</td><td>CAN High</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">CAN-L</td><td><span class="pin-type pin-type--can">CAN</span></td><td class="pin-level">3.3 V</td><td>CAN Low</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-13" data-conn="13">
<p class="pin-sheet__eyebrow">13 · Front view · 10 pin</p>
<p class="pin-sheet__title">CM SPI / PWM</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 10 pin</b></div>
<div><span>Interface</span><b>SPI1 + PWM</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--spi" data-pin="2" title="2 · SCK"></span><span class="pin-dot pin-dot--spi" data-pin="3" title="3 · MISO(RX)"></span><span class="pin-dot pin-dot--spi" data-pin="4" title="4 · MOSI(TX)"></span><span class="pin-dot pin-dot--spi" data-pin="5" title="5 · CS"></span><span class="pin-dot pin-dot--pwm" data-pin="6" title="6 · CM5 CH1"></span><span class="pin-dot pin-dot--pwm" data-pin="7" title="7 · CM5 CH2"></span><span class="pin-dot pin-dot--pwm" data-pin="8" title="8 · CM5 CH3"></span><span class="pin-dot pin-dot--pwm" data-pin="9" title="9 · CM5 CH4"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>System 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">SCK</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>CM5 SPI1 SCLK</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">MISO(RX)</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>CM5 SPI1 SIO1 (MISO)</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">MOSI(TX)</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>CM5 SPI1 SIO0 (MOSI)</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">CS</td><td><span class="pin-type pin-type--spi">SPI</span></td><td class="pin-level">3.3 V</td><td>CM5 SPI1 CS1</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">CM5 CH1</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>CM5 PWM CH1</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">CM5 CH2</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>CM5 PWM CH2</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">CM5 CH3</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>CM5 PWM CH3</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">CM5 CH4</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>CM5 PWM CH4</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-14" data-conn="14">
<p class="pin-sheet__eyebrow">14 · Front view · 10 pin</p>
<p class="pin-sheet__title">CM GPIO / UART</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 10 pin</b></div>
<div><span>Interface</span><b>GPIO / UART2</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--gpio" data-pin="2" title="2 · CM5 GPIO22"></span><span class="pin-dot pin-dot--gpio" data-pin="3" title="3 · CM5 GPIO23"></span><span class="pin-dot pin-dot--gpio" data-pin="4" title="4 · CM5 GPIO24"></span><span class="pin-dot pin-dot--gpio" data-pin="5" title="5 · CM5 GPIO25"></span><span class="pin-dot pin-dot--gpio" data-pin="6" title="6 · CM5 GPIO26"></span><span class="pin-dot pin-dot--gpio" data-pin="7" title="7 · CM5 GPIO27"></span><span class="pin-dot pin-dot--uart" data-pin="8" title="8 · TX"></span><span class="pin-dot pin-dot--uart" data-pin="9" title="9 · RX"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>System 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">CM5 GPIO22</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>CM5 GPIO22</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">CM5 GPIO23</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>CM5 GPIO23</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">CM5 GPIO24</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>CM5 GPIO24</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">CM5 GPIO25</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>CM5 GPIO25</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">CM5 GPIO26</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>CM5 GPIO26</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">CM5 GPIO27</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>CM5 GPIO27</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">TX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>CM5 UART2 TX</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">RX</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>CM5 UART2 RX</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-15" data-conn="15">
<p class="pin-sheet__eyebrow">15 · Front view · 4 pin</p>
<p class="pin-sheet__title">FAN</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-SH · 4 pin</b></div>
<div><span>Interface</span><b>PWM fan</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--pwm" data-pin="2" title="2 · PWM"></span><span class="pin-dot pin-dot--gnd" data-pin="3" title="3 · GND"></span><span class="pin-dot pin-dot--pwm" data-pin="4" title="4 · TACHO"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>System 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">PWM</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>Fan PWM</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Gnd</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">TACHO</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>Fan Tacho</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-16" data-conn="16">
<p class="pin-sheet__eyebrow">16 · Front view · 6 pin</p>
<p class="pin-sheet__title">CM I2C</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>I2C1 / I2C3</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--i2c" data-pin="2" title="2 · SCL(1)"></span><span class="pin-dot pin-dot--i2c" data-pin="3" title="3 · SDA(1)"></span><span class="pin-dot pin-dot--i2c" data-pin="4" title="4 · SCL(2)"></span><span class="pin-dot pin-dot--i2c" data-pin="5" title="5 · SDA(2)"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>System 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">SCL(1)</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>CM5 I2C1 SCL</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">SDA(1)</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>CM5 I2C1 SDA</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SCL(2)</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>CM5 I2C3 SCL</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SDA(2)</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>CM5 I2C3 SDA</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-17" data-conn="17">
<p class="pin-sheet__eyebrow">17 · Back view · 8 pin</p>
<p class="pin-sheet__title">CM ETH</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 8 pin</b></div>
<div><span>Interface</span><b>CM5 Ethernet</b></div>
<div><span>Location</span><b>Back view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--eth pin-dot--one" data-pin="1" title="1 · TX-N(1)"></span><span class="pin-dot pin-dot--eth" data-pin="2" title="2 · TX-P(1)"></span><span class="pin-dot pin-dot--eth" data-pin="3" title="3 · RX-N(1)"></span><span class="pin-dot pin-dot--eth" data-pin="4" title="4 · RX-P(1)"></span><span class="pin-dot pin-dot--eth" data-pin="5" title="5 · TX-N(2)"></span><span class="pin-dot pin-dot--eth" data-pin="6" title="6 · TX-P(2)"></span><span class="pin-dot pin-dot--eth" data-pin="7" title="7 · RX-N(2)"></span><span class="pin-dot pin-dot--eth" data-pin="8" title="8 · RX-P(2)"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">TX-N(1)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 TX-</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX-P(1)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 TX+</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX-N(1)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 RX-</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">RX-P(1)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 RX+</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">TX-N(2)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 TX-</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">TX-P(2)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 TX+</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">RX-N(2)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 RX-</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">RX-P(2)</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 RX+</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-18" data-conn="18">
<p class="pin-sheet__eyebrow">18 · Back view · 4 pin</p>
<p class="pin-sheet__title">PX4 ETH</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>FMU Ethernet</b></div>
<div><span>Location</span><b>Back view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--eth pin-dot--one" data-pin="1" title="1 · TX-N"></span><span class="pin-dot pin-dot--eth" data-pin="2" title="2 · TX-P"></span><span class="pin-dot pin-dot--eth" data-pin="3" title="3 · RX-N"></span><span class="pin-dot pin-dot--eth" data-pin="4" title="4 · RX-P"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">TX-N</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>ETH TX-N</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX-P</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>ETH TX-P</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX-N</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>ETH RX-N</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">RX-P</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>ETH RX-P</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-19" data-conn="19">
<p class="pin-sheet__eyebrow">19 · Back view · 4 pin</p>
<p class="pin-sheet__title">PWR I2C</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>Power monitor</b></div>
<div><span>Location</span><b>Back view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--i2c" data-pin="2" title="2 · SCL"></span><span class="pin-dot pin-dot--i2c" data-pin="3" title="3 · SDA"></span><span class="pin-dot pin-dot--gnd" data-pin="4" title="4 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>System 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">SCL</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C1 SCL</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">SDA</td><td><span class="pin-type pin-type--i2c">I2C</span></td><td class="pin-level">3.3 V</td><td>I2C1 SDA</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-20" data-conn="20">
<p class="pin-sheet__eyebrow">20 · Back view · 10 pin</p>
<p class="pin-sheet__title">FMU DEBUG</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-SH · 10 pin</b></div>
<div><span>Interface</span><b>SWD + USART3</b></div>
<div><span>Location</span><b>Back view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · FMU 3.3V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX(3)"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX(3)"></span><span class="pin-dot pin-dot--debug" data-pin="4" title="4 · SWDIO"></span><span class="pin-dot pin-dot--debug" data-pin="5" title="5 · SWCLK"></span><span class="pin-dot pin-dot--debug" data-pin="6" title="6 · SCK-EXT"></span><span class="pin-dot pin-dot--gpio" data-pin="7" title="7 · NFC-GPIO"></span><span class="pin-dot pin-dot--gpio" data-pin="8" title="8 · PH11-GPIO"></span><span class="pin-dot pin-dot--debug" data-pin="9" title="9 · FMU NRST"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">FMU 3.3V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">3.3 V</td><td>FMU VDD 3.3V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX(3)</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>USART3 TX Debug</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX(3)</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>USART3 RX Debug</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SWDIO</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>FMU SWDIO</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SWCLK</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>FMU SWCLK</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">SCK-EXT</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>SPI6 SCK (external 1)</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">NFC-GPIO</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>NFC GPIO</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">PH11-GPIO</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>PH11</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">FMU NRST</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>FMU NRST</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-21" data-conn="21">
<p class="pin-sheet__eyebrow">21 · Back view · 10 pin</p>
<p class="pin-sheet__title">I/O DEBUG</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-SH · 10 pin</b></div>
<div><span>Interface</span><b>SWD + USART1</b></div>
<div><span>Location</span><b>Back view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · IO 3.3V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX(1)"></span><span class="pin-dot pin-dot--nc" data-pin="3" title="3 · NC"></span><span class="pin-dot pin-dot--debug" data-pin="4" title="4 · SWDIO"></span><span class="pin-dot pin-dot--debug" data-pin="5" title="5 · SWCLK"></span><span class="pin-dot pin-dot--debug" data-pin="6" title="6 · SWO"></span><span class="pin-dot pin-dot--gpio" data-pin="7" title="7 · SPARE-1"></span><span class="pin-dot pin-dot--gpio" data-pin="8" title="8 · SPARE-2"></span><span class="pin-dot pin-dot--debug" data-pin="9" title="9 · IO NRST"></span><span class="pin-dot pin-dot--gnd" data-pin="10" title="10 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">IO 3.3V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">3.3 V</td><td>IO VDD 3.3V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX(1)</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>IO USART1 TX Debug</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">NC</td><td><span class="pin-type pin-type--nc">NC</span></td><td class="pin-level">—</td><td>Not connected</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SWDIO</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>IO SWDIO</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SWCLK</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>IO SWCLK</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">SWO</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>IO SWO</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">SPARE-1</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>IO Spare GPIO1</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">SPARE-2</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>IO Spare GPIO2</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">IO NRST</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>IO NRST</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-22" data-conn="22">
<p class="pin-sheet__eyebrow">22 · Back view · 2 pin</p>
<p class="pin-sheet__title">PWR IN 3S-6S</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>XT30</b></div>
<div><span>Interface</span><b>Main power</b></div>
<div><span>Location</span><b>Back view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · + (9-26V)"></span><span class="pin-dot pin-dot--gnd" data-pin="2" title="2 · − (GND)"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">+ (9-26V)</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">9-26 V</td><td>Main power input, +9 V to +26 V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">− (GND)</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="conn-23" data-conn="23">
<p class="pin-sheet__eyebrow">23 · Front view · 8 positions</p>
<p class="pin-sheet__title">CM SWITCH</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>8-position DIP switch</b></div>
<div><span>Interface</span><b>CM5 boot &amp; interface options</b></div>
<div><span>Location</span><b>Front view</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--switch pin-dot--one" data-pin="1" title="1 · Wifi Disable"></span><span class="pin-dot pin-dot--switch" data-pin="2" title="2 · Bluetooth Disable"></span><span class="pin-dot pin-dot--switch" data-pin="3" title="3 · Rpi Boot"></span><span class="pin-dot pin-dot--switch" data-pin="4" title="4 · EEProm WP"></span><span class="pin-dot pin-dot--switch" data-pin="5" title="5 · Ethernet Sync"></span><span class="pin-dot pin-dot--switch" data-pin="6" title="6 · USB OTG"></span><span class="pin-dot pin-dot--switch" data-pin="7" title="7 · PMIC Enable"></span><span class="pin-dot pin-dot--switch" data-pin="8" title="8 · Power Button"></span></div>
<table class="pin-table">
<thead><tr><th>#</th><th>Switch</th><th>Type</th><th>Level</th><th>Function</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">Wifi Disable</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>WiFi disable (active low)</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">Bluetooth Disable</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>Bluetooth disable (active low)</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">Rpi Boot</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>RPi boot (eMMC boot disable)</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">EEProm WP</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>EEPROM write protect (active low)</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">Ethernet Sync</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>Ethernet sync out</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">USB OTG</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>USB OTG ID</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">PMIC Enable</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>PMIC enable</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">Power Button</td><td><span class="pin-type pin-type--switch">Switch</span></td><td class="pin-level">—</td><td>Power button</td></tr>
</tbody>
</table>
</section>
</div>

</div>

!!! warning "DSM Support"
    **08 PPM/SBUS RC** does not support DSM receivers.

!!! note "Onboard Power Monitoring"
    The board includes an onboard voltage-sensing module (**INA238**). To also measure current draw or monitor an external battery, connect a compatible I2C power module to **19 PWR I2C**.

!!! note "CM Switch State"
    When the **23 CM SWITCH** levers are toggled toward the **"CM SWITCH"** text, they are in the **PASSIVE/DEFAULT** state. Wifi Disable, Bluetooth Disable and EEProm WP are active low; Rpi Boot disables eMMC boot.

!!! danger "Power Input"
    Observe correct polarity on **22 PWR IN**. Input voltage must stay within **+9V to +26V**; reverse polarity or over-voltage may permanently damage the board. Power the board exclusively through the **XT30 cable supplied by Lectron**: it compensates for voltage ripples caused by the motors, and a third-party or incorrectly wired cable may damage the onboard regulator stage.

## **Other Interfaces**

Unnumbered ports, labelled directly on the case.

| Interface | Connector | Notes |
| :-------- | :-------- | :---- |
| PX USB | USB 2.0 Type-C | FMU firmware flashing and MAVLink over USB |
| CM USB0 / CM USB1 | USB 3.0 Type-C | CM5 host ports |
| CM USB2 | USB 2.0 Micro | CM5 USB 2.0 port |
| HDMI | Micro HDMI | CM5 video output |
| CSI CAM1 / CSI CAM2 | 22-pin FFC, 0.5 mm | MIPI CSI camera / display (pinouts below) |
| M.2 KEY | M.2 M-Key 2230 / 2242 | PCIe Gen2 x1 (NVMe, Hailo-8, DX-M1M) |
| PX SD CARD | microSD | FMU logging |
| CM SD CARD | microSD | CM5 storage (CM5 Lite only) |

??? abstract "CSI camera pinouts"

    **CSI-1 - Camera / Display 0**
    22-pin 0.5mm-pitch FFC carrying MIPI port 0 (4-lane) (**22-pin FFC (0.5mm)**).

    | Pin | Signal | Voltage |
    | :-: | :----- | :-----: |
    |  1  | GROUND  | GND  |
    |  2  | MIPI0_D0_N  | +3.3V  |
    |  3  | MIPI0_D0_P  | +3.3V  |
    |  4  | GROUND  | GND  |
    |  5  | MIPI0_D1_N  | +3.3V  |
    |  6  | MIPI0_D1_P  | +3.3V  |
    |  7  | GROUND  | GND  |
    |  8  | MIPI0_C_N  | +3.3V  |
    |  9  | MIPI0_C_P  | +3.3V  |
    |  10  | GROUND  | GND  |
    |  11  | MIPI0_D2_N  | +3.3V  |
    |  12  | MIPI0_D2_P  | +3.3V  |
    |  13  | GROUND  | GND  |
    |  14  | MIPI0_D3_N  | +3.3V  |
    |  15  | MIPI0_D3_P  | +3.3V  |
    |  16  | GROUND  | GND  |
    |  17  | CAM_GPIO0  | +3.3V  |
    |  18  | CAM_GPIO1  | +3.3V  |
    |  19  | GROUND  | GND  |
    |  20  | CM5_SCL0  | +3.3V  |
    |  21  | CM5_SDA0  | +3.3V  |
    |  22  | CM5 3.3V  | +3.3V  |

    **CSI-2 - Camera / Display 1**
    22-pin 0.5mm-pitch FFC carrying MIPI port 1 (4-lane) (**22-pin FFC (0.5mm)**).

    | Pin | Signal | Voltage |
    | :-: | :----- | :-----: |
    |  1  | GROUND  | GND  |
    |  2  | MIPI1_D0_N  | +3.3V  |
    |  3  | MIPI1_D0_P  | +3.3V  |
    |  4  | GROUND  | GND  |
    |  5  | MIPI1_D1_N  | +3.3V  |
    |  6  | MIPI1_D1_P  | +3.3V  |
    |  7  | GROUND  | GND  |
    |  8  | MIPI1_C_N  | +3.3V  |
    |  9  | MIPI1_C_P  | +3.3V  |
    |  10  | GROUND  | GND  |
    |  11  | MIPI1_D2_N  | +3.3V  |
    |  12  | MIPI1_D2_P  | +3.3V  |
    |  13  | GROUND  | GND  |
    |  14  | MIPI1_D3_N  | +3.3V  |
    |  15  | MIPI1_D3_P  | +3.3V  |
    |  16  | GROUND  | GND  |
    |  17  | CM5 3.3V  | +3.3V  |
    |  18  | NC  | ---  |
    |  19  | GROUND  | GND  |
    |  20  | CM5 ID-SC  | +3.3V  |
    |  21  | CM5 ID-SD  | +3.3V  |
    |  22  | CM5 3.3V  | +3.3V  |

!!! info "Reference"
    Connector layout follows the **Pixhawk Bus Standard** on the FMU side.
