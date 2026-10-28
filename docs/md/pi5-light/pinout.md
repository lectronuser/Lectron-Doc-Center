# Pinout

This page describes every port on the **Lectron Pi5 Light Autopilot**: where it is, its connector type, pin assignment and signal levels. Ports are numbered as in the board views below.

Click a numbered connector on the board views or one of the buttons below. Pin 1 is drawn as a square; hover a table row to highlight that pin on the connector.

!!! note "Pin 1 Identification"
    On every connector, **Pin 1** is the first row of the table and the square in the connector strip. Use the image below to locate Pin 1 on the physical JST GH connector before wiring.

    ![JST GH Connector Pin Identification](../../images/raspberry/jst_gh_pin1.png){ width="420" }

<div class="pin-explorer" markdown>

<div class="pin-views pin-views--single pin-views--drawn">
<figure>
<svg class="bp-svg" viewBox="0 0 735 730" role="img" aria-label="Pi5 Light Autopilot, top side" xmlns="http://www.w3.org/2000/svg">
<rect class="bp-pcb" x="10" y="18" width="713" height="696" rx="34"/>
<circle class="bp-hole" cx="56" cy="56" r="27"/><circle class="bp-hole-in" cx="56" cy="56" r="15"/>
<circle class="bp-hole" cx="688" cy="58" r="27"/><circle class="bp-hole-in" cx="688" cy="58" r="15"/>
<circle class="bp-hole" cx="52" cy="670" r="27"/><circle class="bp-hole-in" cx="52" cy="670" r="15"/>
<circle class="bp-hole" cx="690" cy="670" r="27"/><circle class="bp-hole-in" cx="690" cy="670" r="15"/>
<rect class="bp-chip" x="330" y="278" width="124" height="122" rx="4"/><text class="bp-chip-label" x="392" y="344" text-anchor="middle">STM32H753</text><path class="bp-arrow" d="M444 205 H416 V194 L390 210 L416 226 V215 H444 Z"/>
<a class="pin-conn" href="#light-01" data-conn="01" aria-label="01 RC IN"><title>01 · RC IN</title><rect class="bp-housing" x="97" y="22" width="86" height="46" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="166.0" y="38.0" width="14.0" height="14.0" rx="1"><title>01 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--rc" data-pin="2" cx="140.0" cy="45.0" r="7.0"><title>01 · pin 2 · RC IN</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="3" cx="107.0" cy="45.0" r="7.0"><title>01 · pin 3 · GND</title></circle><g class="bp-badge"><circle cx="140.0" cy="94.0" r="19"/><text x="140.0" y="100.0" text-anchor="middle">1</text></g></a>
<a class="pin-conn" href="#light-02" data-conn="02" aria-label="02 UART4 &amp; I2C"><title>02 · UART4 &amp; I2C</title><rect class="bp-housing" x="193" y="22" width="127" height="46" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="303.0" y="38.0" width="14.0" height="14.0" rx="1"><title>02 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--uart" data-pin="2" cx="288.6" cy="45.0" r="7.0"><title>02 · pin 2 · TX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="3" cx="267.2" cy="45.0" r="7.0"><title>02 · pin 3 · RX</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="4" cx="245.8" cy="45.0" r="7.0"><title>02 · pin 4 · SCL</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="5" cx="224.4" cy="45.0" r="7.0"><title>02 · pin 5 · SDA</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="6" cx="203.0" cy="45.0" r="7.0"><title>02 · pin 6 · GND</title></circle><g class="bp-badge"><circle cx="256.5" cy="94.0" r="19"/><text x="256.5" y="100.0" text-anchor="middle">2</text></g></a>
<a class="pin-conn" href="#light-03" data-conn="03" aria-label="03 GPS1"><title>03 · GPS1</title><rect class="bp-housing" x="330" y="22" width="193" height="46" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="506.1" y="38.1" width="13.8" height="13.8" rx="1"><title>03 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--uart" data-pin="2" cx="493.8" cy="45.0" r="6.9"><title>03 · pin 2 · TX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="3" cx="474.6" cy="45.0" r="6.9"><title>03 · pin 3 · RX</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="4" cx="455.3" cy="45.0" r="6.9"><title>03 · pin 4 · SCL</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="5" cx="436.1" cy="45.0" r="6.9"><title>03 · pin 5 · SDA</title></circle><circle class="bp-pin bp-pin--gpio" data-pin="6" cx="416.9" cy="45.0" r="6.9"><title>03 · pin 6 · SAFETY SW IN</title></circle><circle class="bp-pin bp-pin--gpio" data-pin="7" cx="397.7" cy="45.0" r="6.9"><title>03 · pin 7 · SAFETY LED</title></circle><circle class="bp-pin bp-pin--power" data-pin="8" cx="378.4" cy="45.0" r="6.9"><title>03 · pin 8 · FC 3.3V</title></circle><circle class="bp-pin bp-pin--gpio" data-pin="9" cx="359.2" cy="45.0" r="6.9"><title>03 · pin 9 · BUZZER(-)</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="10" cx="340.0" cy="45.0" r="6.9"><title>03 · pin 10 · GND</title></circle><g class="bp-badge"><circle cx="426.5" cy="94.0" r="19"/><text x="426.5" y="100.0" text-anchor="middle">3</text></g></a>
<a class="pin-conn" href="#light-04" data-conn="04" aria-label="04 USB TYPE-C"><title>04 · USB TYPE-C</title><rect class="bp-metal" x="540" y="14" width="108" height="84" rx="16"/><rect class="bp-slot" x="556" y="44.0" width="76" height="24" rx="12"/><g class="bp-badge"><circle cx="594.0" cy="56.0" r="19"/><text x="594.0" y="62.0" text-anchor="middle">4</text></g><text class="bp-name" x="594" y="126" text-anchor="middle">USB TYPE-C</text></a>
<a class="pin-conn" href="#light-13" data-conn="13" aria-label="13 M2-M KEY"><title>13 · M2-M KEY</title><rect class="bp-dark" x="14" y="108" width="266" height="110" rx="4"/><rect class="bp-gold" x="32.0" y="118" width="5" height="14"/><rect class="bp-gold" x="32.0" y="194" width="5" height="14"/><rect class="bp-gold" x="41.5" y="118" width="5" height="14"/><rect class="bp-gold" x="41.5" y="194" width="5" height="14"/><rect class="bp-gold" x="51.0" y="118" width="5" height="14"/><rect class="bp-gold" x="51.0" y="194" width="5" height="14"/><rect class="bp-gold" x="60.5" y="118" width="5" height="14"/><rect class="bp-gold" x="60.5" y="194" width="5" height="14"/><rect class="bp-gold" x="70.0" y="118" width="5" height="14"/><rect class="bp-gold" x="70.0" y="194" width="5" height="14"/><rect class="bp-gold" x="79.5" y="118" width="5" height="14"/><rect class="bp-gold" x="79.5" y="194" width="5" height="14"/><rect class="bp-gold" x="89.0" y="118" width="5" height="14"/><rect class="bp-gold" x="89.0" y="194" width="5" height="14"/><rect class="bp-gold" x="98.5" y="118" width="5" height="14"/><rect class="bp-gold" x="98.5" y="194" width="5" height="14"/><rect class="bp-gold" x="108.0" y="118" width="5" height="14"/><rect class="bp-gold" x="108.0" y="194" width="5" height="14"/><rect class="bp-gold" x="117.5" y="118" width="5" height="14"/><rect class="bp-gold" x="117.5" y="194" width="5" height="14"/><rect class="bp-gold" x="127.0" y="118" width="5" height="14"/><rect class="bp-gold" x="127.0" y="194" width="5" height="14"/><rect class="bp-gold" x="136.5" y="118" width="5" height="14"/><rect class="bp-gold" x="136.5" y="194" width="5" height="14"/><rect class="bp-gold" x="146.0" y="118" width="5" height="14"/><rect class="bp-gold" x="146.0" y="194" width="5" height="14"/><rect class="bp-gold" x="155.5" y="118" width="5" height="14"/><rect class="bp-gold" x="155.5" y="194" width="5" height="14"/><rect class="bp-gold" x="165.0" y="118" width="5" height="14"/><rect class="bp-gold" x="165.0" y="194" width="5" height="14"/><rect class="bp-gold" x="174.5" y="118" width="5" height="14"/><rect class="bp-gold" x="174.5" y="194" width="5" height="14"/><rect class="bp-gold" x="184.0" y="118" width="5" height="14"/><rect class="bp-gold" x="184.0" y="194" width="5" height="14"/><rect class="bp-gold" x="193.5" y="118" width="5" height="14"/><rect class="bp-gold" x="193.5" y="194" width="5" height="14"/><rect class="bp-gold" x="203.0" y="118" width="5" height="14"/><rect class="bp-gold" x="203.0" y="194" width="5" height="14"/><rect class="bp-gold" x="212.5" y="118" width="5" height="14"/><rect class="bp-gold" x="212.5" y="194" width="5" height="14"/><rect class="bp-gold" x="222.0" y="118" width="5" height="14"/><rect class="bp-gold" x="222.0" y="194" width="5" height="14"/><rect class="bp-gold" x="231.5" y="118" width="5" height="14"/><rect class="bp-gold" x="231.5" y="194" width="5" height="14"/><rect class="bp-gold" x="241.0" y="118" width="5" height="14"/><rect class="bp-gold" x="241.0" y="194" width="5" height="14"/><rect class="bp-gold" x="250.5" y="118" width="5" height="14"/><rect class="bp-gold" x="250.5" y="194" width="5" height="14"/><rect class="bp-gold" x="260.0" y="118" width="5" height="14"/><rect class="bp-gold" x="260.0" y="194" width="5" height="14"/><g class="bp-badge"><circle cx="147.0" cy="163.0" r="19"/><text x="147.0" y="169.0" text-anchor="middle">13</text></g></a>
<a class="pin-conn" href="#light-05" data-conn="05" aria-label="05 CANBUS"><title>05 · CANBUS</title><rect class="bp-housing" x="540" y="152" width="56" height="106" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="561.0" y="241.0" width="14.0" height="14.0" rx="1"><title>05 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--can" data-pin="2" cx="568.0" cy="219.3" r="7.0"><title>05 · pin 2 · CAN-H</title></circle><circle class="bp-pin bp-pin--can" data-pin="3" cx="568.0" cy="190.7" r="7.0"><title>05 · pin 3 · CAN-L</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="4" cx="568.0" cy="162.0" r="7.0"><title>05 · pin 4 · GND</title></circle><g class="bp-badge"><circle cx="514.0" cy="205.0" r="19"/><text x="514.0" y="211.0" text-anchor="middle">5</text></g></a>
<a class="pin-conn" href="#light-07" data-conn="07" aria-label="07 GPS2"><title>07 · GPS2</title><rect class="bp-housing" x="540" y="275" width="56" height="126" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="561.0" y="384.0" width="14.0" height="14.0" rx="1"><title>07 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--uart" data-pin="2" cx="568.0" cy="369.8" r="7.0"><title>07 · pin 2 · TX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="3" cx="568.0" cy="348.6" r="7.0"><title>07 · pin 3 · RX</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="4" cx="568.0" cy="327.4" r="7.0"><title>07 · pin 4 · SCL</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="5" cx="568.0" cy="306.2" r="7.0"><title>07 · pin 5 · SDA</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="6" cx="568.0" cy="285.0" r="7.0"><title>07 · pin 6 · GND</title></circle><g class="bp-badge"><circle cx="514.0" cy="338.0" r="19"/><text x="514.0" y="344.0" text-anchor="middle">7</text></g></a>
<a class="pin-conn" href="#light-09" data-conn="09" aria-label="09 I2C2"><title>09 · I2C2</title><rect class="bp-housing" x="540" y="428" width="56" height="98" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="561.0" y="509.0" width="14.0" height="14.0" rx="1"><title>09 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--i2c" data-pin="2" cx="568.0" cy="490.0" r="7.0"><title>09 · pin 2 · SCL</title></circle><circle class="bp-pin bp-pin--i2c" data-pin="3" cx="568.0" cy="464.0" r="7.0"><title>09 · pin 3 · SDA</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="4" cx="568.0" cy="438.0" r="7.0"><title>09 · pin 4 · GND</title></circle><g class="bp-badge"><circle cx="514.0" cy="442.0" r="19"/><text x="514.0" y="448.0" text-anchor="middle">9</text></g></a>
<a class="pin-conn" href="#light-06" data-conn="06" aria-label="06 TELEM1"><title>06 · TELEM1</title><rect class="bp-housing" x="676" y="154" width="48" height="132" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="693.0" y="269.0" width="14.0" height="14.0" rx="1"><title>06 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--uart" data-pin="2" cx="700.0" cy="253.6" r="7.0"><title>06 · pin 2 · TX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="3" cx="700.0" cy="231.2" r="7.0"><title>06 · pin 3 · RX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="4" cx="700.0" cy="208.8" r="7.0"><title>06 · pin 4 · CTS</title></circle><circle class="bp-pin bp-pin--uart" data-pin="5" cx="700.0" cy="186.4" r="7.0"><title>06 · pin 5 · RTS</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="6" cx="700.0" cy="164.0" r="7.0"><title>06 · pin 6 · GND</title></circle><g class="bp-badge"><circle cx="650.0" cy="220.0" r="19"/><text x="650.0" y="226.0" text-anchor="middle">6</text></g></a>
<a class="pin-conn" href="#light-08" data-conn="08" aria-label="08 FMU DEBUG"><title>08 · FMU DEBUG</title><rect class="bp-housing" x="668" y="308" width="56" height="98" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="690.4" y="390.4" width="11.2" height="11.2" rx="1"><title>08 · pin 1 · FMU 3.3V</title></rect><circle class="bp-pin bp-pin--uart" data-pin="2" cx="696.0" cy="380.4" r="5.6"><title>08 · pin 2 · TX(3)</title></circle><circle class="bp-pin bp-pin--uart" data-pin="3" cx="696.0" cy="364.8" r="5.6"><title>08 · pin 3 · RX(3)</title></circle><circle class="bp-pin bp-pin--debug" data-pin="4" cx="696.0" cy="349.2" r="5.6"><title>08 · pin 4 · SWDIO</title></circle><circle class="bp-pin bp-pin--debug" data-pin="5" cx="696.0" cy="333.6" r="5.6"><title>08 · pin 5 · SWCLK</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="6" cx="696.0" cy="318.0" r="5.6"><title>08 · pin 6 · GND</title></circle><g class="bp-badge"><circle cx="642.0" cy="357.0" r="19"/><text x="642.0" y="363.0" text-anchor="middle">8</text></g></a>
<a class="pin-conn" href="#light-10" data-conn="10" aria-label="10 TELEM2"><title>10 · TELEM2</title><rect class="bp-housing" x="668" y="428" width="56" height="124" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="689.0" y="535.0" width="14.0" height="14.0" rx="1"><title>10 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--uart" data-pin="2" cx="696.0" cy="521.2" r="7.0"><title>10 · pin 2 · TX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="3" cx="696.0" cy="500.4" r="7.0"><title>10 · pin 3 · RX</title></circle><circle class="bp-pin bp-pin--uart" data-pin="4" cx="696.0" cy="479.6" r="7.0"><title>10 · pin 4 · CTS</title></circle><circle class="bp-pin bp-pin--uart" data-pin="5" cx="696.0" cy="458.8" r="7.0"><title>10 · pin 5 · RTS</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="6" cx="696.0" cy="438.0" r="7.0"><title>10 · pin 6 · GND</title></circle><g class="bp-badge"><circle cx="642.0" cy="490.0" r="19"/><text x="642.0" y="496.0" text-anchor="middle">10</text></g></a>
<a class="pin-conn" href="#light-11" data-conn="11" aria-label="11 PWM2"><title>11 · PWM2</title><rect class="bp-housing" x="392" y="474" width="128" height="50" rx="5"/><rect class="bp-pin bp-pin--pwm" data-pin="1" x="395.0" y="492.0" width="14.0" height="14.0" rx="1"><title>11 · pin 1 · FMU CH-5</title></rect><circle class="bp-pin bp-pin--pwm" data-pin="2" cx="423.6" cy="499.0" r="7.0"><title>11 · pin 2 · FMU CH-6</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="3" cx="445.2" cy="499.0" r="7.0"><title>11 · pin 3 · FMU CH-7</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="4" cx="466.8" cy="499.0" r="7.0"><title>11 · pin 4 · FMU CH-8</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="5" cx="488.4" cy="499.0" r="7.0"><title>11 · pin 5 · FMU CH-9</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="6" cx="510.0" cy="499.0" r="7.0"><title>11 · pin 6 · GND</title></circle><g class="bp-badge"><circle cx="456.0" cy="448.0" r="19"/><text x="456.0" y="454.0" text-anchor="middle">11</text></g></a>
<a class="pin-conn" href="#light-12" data-conn="12" aria-label="12 POWER IN"><title>12 · POWER IN</title><rect class="bp-xt30" x="472" y="608" width="156" height="102" rx="10"/><rect class="bp-gold" x="508" y="560" width="16" height="62" rx="8"/><rect class="bp-gold" x="576" y="560" width="16" height="62" rx="8"/><g class="bp-badge"><circle cx="550.0" cy="635.0" r="19"/><text x="550.0" y="641.0" text-anchor="middle">12</text></g></a>
</svg>
<figcaption>Top side · ports 1-13</figcaption>
</figure>
<figure>
<svg class="bp-svg" viewBox="0 0 752 730" role="img" aria-label="Pi5 Light Autopilot, bottom side" xmlns="http://www.w3.org/2000/svg">
<rect class="bp-pcb" x="10" y="18" width="730" height="696" rx="34"/>
<circle class="bp-hole" cx="56" cy="56" r="27"/><circle class="bp-hole-in" cx="56" cy="56" r="15"/>
<circle class="bp-hole" cx="688" cy="58" r="27"/><circle class="bp-hole-in" cx="688" cy="58" r="15"/>
<circle class="bp-hole" cx="52" cy="670" r="27"/><circle class="bp-hole-in" cx="52" cy="670" r="15"/>
<circle class="bp-hole" cx="690" cy="670" r="27"/><circle class="bp-hole-in" cx="690" cy="670" r="15"/>
<a class="pin-conn" href="#light-20" data-conn="20" aria-label="20 CM5 MODULE"><title>20 · CM5 MODULE</title><rect class="bp-dark" x="254" y="128" width="266" height="50" rx="4"/><rect class="bp-gold-row" x="266" y="142" width="242" height="22" rx="2"/><rect class="bp-dark" x="254" y="532" width="266" height="50" rx="4"/><rect class="bp-gold-row" x="266" y="546" width="242" height="22" rx="2"/><g class="bp-badge"><circle cx="373.0" cy="218.0" r="19"/><text x="373.0" y="224.0" text-anchor="middle">20</text></g><g class="bp-badge"><circle cx="373.0" cy="494.0" r="19"/><text x="373.0" y="500.0" text-anchor="middle">20</text></g><text class="bp-name" x="400" y="223" text-anchor="start">CM5 MODULE</text><text class="bp-name" x="400" y="499" text-anchor="start">CM5 MODULE</text></a>
<a class="pin-conn" href="#light-14" data-conn="14" aria-label="14 CM5 FAN"><title>14 · CM5 FAN</title><rect class="bp-housing" x="104" y="22" width="76" height="46" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="163.3" y="38.3" width="13.4" height="13.4" rx="1"><title>14 · pin 1 · 5V</title></rect><circle class="bp-pin bp-pin--pwm" data-pin="2" cx="151.3" cy="45.0" r="6.7"><title>14 · pin 2 · PWM</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="3" cx="132.7" cy="45.0" r="6.7"><title>14 · pin 3 · GND</title></circle><circle class="bp-pin bp-pin--gpio" data-pin="4" cx="114.0" cy="45.0" r="6.7"><title>14 · pin 4 · TACHO</title></circle><g class="bp-badge"><circle cx="142.0" cy="94.0" r="19"/><text x="142.0" y="100.0" text-anchor="middle">14</text></g></a>
<a class="pin-conn" href="#light-15" data-conn="15" aria-label="15 PWM1 (ESC)"><title>15 · PWM1 (ESC)</title><rect class="bp-housing" x="254" y="22" width="122" height="46" rx="5"/><rect class="bp-pin bp-pin--power" data-pin="1" x="360.8" y="39.8" width="10.5" height="10.5" rx="1"><title>15 · pin 1 · VIN</title></rect><circle class="bp-pin bp-pin--adc" data-pin="2" cx="351.4" cy="45.0" r="5.2"><title>15 · pin 2 · ADC 3.3V</title></circle><circle class="bp-pin bp-pin--nc" data-pin="3" cx="336.9" cy="45.0" r="5.2"><title>15 · pin 3 · NC</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="4" cx="322.3" cy="45.0" r="5.2"><title>15 · pin 4 · FMU CH-1</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="5" cx="307.7" cy="45.0" r="5.2"><title>15 · pin 5 · FMU CH-2</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="6" cx="293.1" cy="45.0" r="5.2"><title>15 · pin 6 · FMU CH-3</title></circle><circle class="bp-pin bp-pin--pwm" data-pin="7" cx="278.6" cy="45.0" r="5.2"><title>15 · pin 7 · FMU CH-4</title></circle><circle class="bp-pin bp-pin--gnd" data-pin="8" cx="264.0" cy="45.0" r="5.2"><title>15 · pin 8 · GND</title></circle><g class="bp-badge"><circle cx="315.0" cy="94.0" r="19"/><text x="315.0" y="100.0" text-anchor="middle">15</text></g></a>
<a class="pin-conn" href="#light-16" data-conn="16" aria-label="16 ETH1 (CM5)"><title>16 · ETH1 (CM5)</title><rect class="bp-housing" x="424" y="22" width="98" height="46" rx="5"/><rect class="bp-pin bp-pin--eth" data-pin="1" x="505.0" y="38.0" width="14.0" height="14.0" rx="1"><title>16 · pin 1 · RX-N</title></rect><circle class="bp-pin bp-pin--eth" data-pin="2" cx="486.0" cy="45.0" r="7.0"><title>16 · pin 2 · RX-P</title></circle><circle class="bp-pin bp-pin--eth" data-pin="3" cx="460.0" cy="45.0" r="7.0"><title>16 · pin 3 · TX-N</title></circle><circle class="bp-pin bp-pin--eth" data-pin="4" cx="434.0" cy="45.0" r="7.0"><title>16 · pin 4 · TX-P</title></circle><g class="bp-badge"><circle cx="473.0" cy="94.0" r="19"/><text x="473.0" y="100.0" text-anchor="middle">16</text></g></a>
<a class="pin-conn" href="#light-17" data-conn="17" aria-label="17 ETH2 (CM5)"><title>17 · ETH2 (CM5)</title><rect class="bp-housing" x="548" y="22" width="100" height="46" rx="5"/><rect class="bp-pin bp-pin--eth" data-pin="1" x="631.0" y="38.0" width="14.0" height="14.0" rx="1"><title>17 · pin 1 · RX-N</title></rect><circle class="bp-pin bp-pin--eth" data-pin="2" cx="611.3" cy="45.0" r="7.0"><title>17 · pin 2 · RX-P</title></circle><circle class="bp-pin bp-pin--eth" data-pin="3" cx="584.7" cy="45.0" r="7.0"><title>17 · pin 3 · TX-N</title></circle><circle class="bp-pin bp-pin--eth" data-pin="4" cx="558.0" cy="45.0" r="7.0"><title>17 · pin 4 · TX-P</title></circle><g class="bp-badge"><circle cx="598.0" cy="94.0" r="19"/><text x="598.0" y="100.0" text-anchor="middle">17</text></g></a>
<a class="pin-conn" href="#light-21" data-conn="21" aria-label="21 CM5 SD CARD"><title>21 · CM5 SD CARD</title><rect class="bp-metal" x="28" y="194" width="174" height="158" rx="6"/><rect class="bp-slot" x="42" y="210" width="128" height="126" rx="4"/><g class="bp-badge"><circle cx="115.0" cy="273.0" r="19"/><text x="115.0" y="279.0" text-anchor="middle">21</text></g><text class="bp-name" x="115" y="318" text-anchor="middle">CM5 SD CARD</text></a>
<a class="pin-conn" href="#light-22" data-conn="22" aria-label="22 FMU SD CARD"><title>22 · FMU SD CARD</title><rect class="bp-metal" x="28" y="362" width="174" height="160" rx="6"/><rect class="bp-slot" x="42" y="378" width="128" height="128" rx="4"/><g class="bp-badge"><circle cx="115.0" cy="442.0" r="19"/><text x="115.0" y="448.0" text-anchor="middle">22</text></g><text class="bp-name" x="115" y="488" text-anchor="middle">FMU SD CARD</text></a>
<a class="pin-conn" href="#light-18" data-conn="18" aria-label="18 CSI CAM 1"><title>18 · CSI CAM 1</title><rect class="bp-dark" x="680" y="144" width="58" height="196" rx="4"/><rect class="bp-gold" x="690" y="156" width="10" height="172"/><g class="bp-badge"><circle cx="709.0" cy="242.0" r="19"/><text x="709.0" y="248.0" text-anchor="middle">18</text></g><text class="bp-name" x="662" y="242" text-anchor="middle" transform="rotate(-90 662 242)">CSI CAM 1</text></a>
<a class="pin-conn" href="#light-19" data-conn="19" aria-label="19 CSI CAM 2"><title>19 · CSI CAM 2</title><rect class="bp-dark" x="680" y="362" width="58" height="190" rx="4"/><rect class="bp-gold" x="690" y="374" width="10" height="166"/><g class="bp-badge"><circle cx="709.0" cy="457.0" r="19"/><text x="709.0" y="463.0" text-anchor="middle">19</text></g><text class="bp-name" x="662" y="457" text-anchor="middle" transform="rotate(-90 662 457)">CSI CAM 2</text></a>
</svg>
<figcaption>Bottom side · ports 14-22</figcaption>
</figure>
</div>

<nav class="pin-index" aria-label="Connectors">
<a href="#light-01" data-conn="01"><b>01</b> RC IN</a>
<a href="#light-02" data-conn="02"><b>02</b> UART4 &amp; I2C</a>
<a href="#light-03" data-conn="03"><b>03</b> GPS1</a>
<a href="#light-04" data-conn="04"><b>04</b> USB TYPE-C</a>
<a href="#light-05" data-conn="05"><b>05</b> CANBUS</a>
<a href="#light-06" data-conn="06"><b>06</b> TELEM1</a>
<a href="#light-07" data-conn="07"><b>07</b> GPS2</a>
<a href="#light-08" data-conn="08"><b>08</b> FMU DEBUG</a>
<a href="#light-09" data-conn="09"><b>09</b> I2C2</a>
<a href="#light-10" data-conn="10"><b>10</b> TELEM2</a>
<a href="#light-11" data-conn="11"><b>11</b> PWM2</a>
<a href="#light-12" data-conn="12"><b>12</b> POWER IN</a>
<a href="#light-13" data-conn="13"><b>13</b> M2-M KEY</a>
<a href="#light-14" data-conn="14"><b>14</b> CM5 FAN</a>
<a href="#light-15" data-conn="15"><b>15</b> PWM1 (ESC)</a>
<a href="#light-16" data-conn="16"><b>16</b> ETH1 (CM5)</a>
<a href="#light-17" data-conn="17"><b>17</b> ETH2 (CM5)</a>
<a href="#light-18" data-conn="18"><b>18</b> CSI CAM 1</a>
<a href="#light-19" data-conn="19"><b>19</b> CSI CAM 2</a>
<a href="#light-20" data-conn="20"><b>20</b> CM5 MODULE</a>
<a href="#light-21" data-conn="21"><b>21</b> CM5 SD CARD</a>
<a href="#light-22" data-conn="22"><b>22</b> FMU SD CARD</a>
</nav>

<div class="pin-legend"><span><i class="pin-dot pin-dot--power"></i>Power</span><span><i class="pin-dot pin-dot--gnd"></i>Ground</span><span><i class="pin-dot pin-dot--uart"></i>UART</span><span><i class="pin-dot pin-dot--i2c"></i>I2C</span><span><i class="pin-dot pin-dot--can"></i>CAN</span><span><i class="pin-dot pin-dot--pwm"></i>PWM</span><span><i class="pin-dot pin-dot--rc"></i>RC</span><span><i class="pin-dot pin-dot--gpio"></i>GPIO</span><span><i class="pin-dot pin-dot--debug"></i>Debug</span><span><i class="pin-dot pin-dot--eth"></i>Ethernet</span><span><i class="pin-dot pin-dot--adc"></i>Analog</span><span><i class="pin-dot pin-dot--one pin-dot--nc"></i>Pin 1</span></div>

<div class="pin-sheets">
<section class="pin-sheet" id="light-01" data-conn="01">
<p class="pin-sheet__eyebrow">01 · Top side · 3 pin</p>
<p class="pin-sheet__title">RC IN</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 3 pin</b></div>
<div><span>Interface</span><b>PPM / SBUS input</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--rc" data-pin="2" title="2 · RC IN"></span><span class="pin-dot pin-dot--gnd" data-pin="3" title="3 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">RC IN</td><td><span class="pin-type pin-type--rc">RC</span></td><td class="pin-level">3.3 V</td><td>PPM / SBUS input (USART6 RX)</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-02" data-conn="02">
<p class="pin-sheet__eyebrow">02 · Top side · 6 pin</p>
<p class="pin-sheet__title">UART4 &amp; I2C</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART4 / I2C3</b></div>
<div><span>Location</span><b>Top side</b></div>
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
<section class="pin-sheet" id="light-03" data-conn="03">
<p class="pin-sheet__eyebrow">03 · Top side · 10 pin</p>
<p class="pin-sheet__title">GPS1</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 10 pin</b></div>
<div><span>Interface</span><b>USART1 / I2C1</b></div>
<div><span>Location</span><b>Top side</b></div>
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
<tr data-pin="6"><td>6</td><td class="pin-sig">SAFETY SW IN</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Safety switch input</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">SAFETY LED</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Safety switch LED output</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">FC 3.3V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">3.3 V</td><td>FMU 3.3V</td></tr>
<tr data-pin="9"><td>9</td><td class="pin-sig">BUZZER(-)</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Buzzer (−), open-drain</td></tr>
<tr data-pin="10"><td>10</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-04" data-conn="04">
<p class="pin-sheet__eyebrow">04 · Top side</p>
<p class="pin-sheet__title">USB TYPE-C</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>USB Type-C</b></div>
<div><span>Interface</span><b>FMU USB 2.0</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
<section class="pin-sheet" id="light-05" data-conn="05">
<p class="pin-sheet__eyebrow">05 · Top side · 4 pin</p>
<p class="pin-sheet__title">CANBUS</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>FMU CAN1 (TJA1051)</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--can" data-pin="2" title="2 · CAN-H"></span><span class="pin-dot pin-dot--can" data-pin="3" title="3 · CAN-L"></span><span class="pin-dot pin-dot--gnd" data-pin="4" title="4 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">CAN-H</td><td><span class="pin-type pin-type--can">CAN</span></td><td class="pin-level">3.3 V</td><td>CAN1 high</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">CAN-L</td><td><span class="pin-type pin-type--can">CAN</span></td><td class="pin-level">3.3 V</td><td>CAN1 low</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-06" data-conn="06">
<p class="pin-sheet__eyebrow">06 · Top side · 6 pin</p>
<p class="pin-sheet__title">TELEM1</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART7</b></div>
<div><span>Location</span><b>Top side</b></div>
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
<section class="pin-sheet" id="light-07" data-conn="07">
<p class="pin-sheet__eyebrow">07 · Top side · 6 pin</p>
<p class="pin-sheet__title">GPS2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART8 / I2C2</b></div>
<div><span>Location</span><b>Top side</b></div>
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
<section class="pin-sheet" id="light-08" data-conn="08">
<p class="pin-sheet__eyebrow">08 · Top side · 6 pin</p>
<p class="pin-sheet__title">FMU DEBUG</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-SH · 6 pin</b></div>
<div><span>Interface</span><b>SWD + USART3</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · FMU 3.3V"></span><span class="pin-dot pin-dot--uart" data-pin="2" title="2 · TX(3)"></span><span class="pin-dot pin-dot--uart" data-pin="3" title="3 · RX(3)"></span><span class="pin-dot pin-dot--debug" data-pin="4" title="4 · SWDIO"></span><span class="pin-dot pin-dot--debug" data-pin="5" title="5 · SWCLK"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">FMU 3.3V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">3.3 V</td><td>FMU VDD 3.3V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">TX(3)</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>USART3 TX debug</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">RX(3)</td><td><span class="pin-type pin-type--uart">UART</span></td><td class="pin-level">3.3 V</td><td>USART3 RX debug</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">SWDIO</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>FMU SWDIO</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">SWCLK</td><td><span class="pin-type pin-type--debug">Debug</span></td><td class="pin-level">3.3 V</td><td>FMU SWCLK</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-09" data-conn="09">
<p class="pin-sheet__eyebrow">09 · Top side · 4 pin</p>
<p class="pin-sheet__title">I2C2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>I2C2</b></div>
<div><span>Location</span><b>Top side</b></div>
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
<section class="pin-sheet" id="light-10" data-conn="10">
<p class="pin-sheet__eyebrow">10 · Top side · 6 pin</p>
<p class="pin-sheet__title">TELEM2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>UART5</b></div>
<div><span>Location</span><b>Top side</b></div>
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
<section class="pin-sheet" id="light-11" data-conn="11">
<p class="pin-sheet__eyebrow">11 · Top side · 6 pin</p>
<p class="pin-sheet__title">PWM2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 6 pin</b></div>
<div><span>Interface</span><b>FMU PWM CH5-CH9</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--pwm pin-dot--one" data-pin="1" title="1 · FMU CH-5"></span><span class="pin-dot pin-dot--pwm" data-pin="2" title="2 · FMU CH-6"></span><span class="pin-dot pin-dot--pwm" data-pin="3" title="3 · FMU CH-7"></span><span class="pin-dot pin-dot--pwm" data-pin="4" title="4 · FMU CH-8"></span><span class="pin-dot pin-dot--pwm" data-pin="5" title="5 · FMU CH-9"></span><span class="pin-dot pin-dot--gnd" data-pin="6" title="6 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">FMU CH-5</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 5</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">FMU CH-6</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 6</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">FMU CH-7</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 7</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">FMU CH-8</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 8</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">FMU CH-9</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 9</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-12" data-conn="12">
<p class="pin-sheet__eyebrow">12 · Top side</p>
<p class="pin-sheet__title">POWER IN</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>XT30</b></div>
<div><span>Interface</span><b>Main power · 3S-12S (9-54 V)</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<p class="pin-sheet__note">Standard XT30 pinout.</p>
</section>
<section class="pin-sheet" id="light-13" data-conn="13">
<p class="pin-sheet__eyebrow">13 · Top side</p>
<p class="pin-sheet__title">M2-M KEY</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>M.2 M-Key</b></div>
<div><span>Interface</span><b>PCIe (Hailo, SSD, DX-M1M)</b></div>
<div><span>Location</span><b>Top side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
<section class="pin-sheet" id="light-14" data-conn="14">
<p class="pin-sheet__eyebrow">14 · Bottom side · 4 pin</p>
<p class="pin-sheet__title">CM5 FAN</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-SH · 4 pin</b></div>
<div><span>Interface</span><b>PWM fan</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · 5V"></span><span class="pin-dot pin-dot--pwm" data-pin="2" title="2 · PWM"></span><span class="pin-dot pin-dot--gnd" data-pin="3" title="3 · GND"></span><span class="pin-dot pin-dot--gpio" data-pin="4" title="4 · TACHO"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">5V</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">5 V</td><td>Peripheral 5V</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">PWM</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>Fan PWM</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">TACHO</td><td><span class="pin-type pin-type--gpio">GPIO</span></td><td class="pin-level">3.3 V</td><td>Fan tachometer</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-15" data-conn="15">
<p class="pin-sheet__eyebrow">15 · Bottom side · 8 pin</p>
<p class="pin-sheet__title">PWM1 (ESC)</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-SH · 8 pin</b></div>
<div><span>Interface</span><b>FMU PWM CH1-CH4 · ESC</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--power pin-dot--one" data-pin="1" title="1 · VIN"></span><span class="pin-dot pin-dot--adc" data-pin="2" title="2 · ADC 3.3V"></span><span class="pin-dot pin-dot--nc" data-pin="3" title="3 · NC"></span><span class="pin-dot pin-dot--pwm" data-pin="4" title="4 · FMU CH-1"></span><span class="pin-dot pin-dot--pwm" data-pin="5" title="5 · FMU CH-2"></span><span class="pin-dot pin-dot--pwm" data-pin="6" title="6 · FMU CH-3"></span><span class="pin-dot pin-dot--pwm" data-pin="7" title="7 · FMU CH-4"></span><span class="pin-dot pin-dot--gnd" data-pin="8" title="8 · GND"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">VIN</td><td><span class="pin-type pin-type--power">Power</span></td><td class="pin-level">9-54 V</td><td>Battery voltage, shared with POWER IN</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">ADC 3.3V</td><td><span class="pin-type pin-type--adc">Analog</span></td><td class="pin-level">3.3 V</td><td>ADC3 input, 3.3 V max (ESC current sense)</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">NC</td><td><span class="pin-type pin-type--nc">NC</span></td><td class="pin-level">—</td><td>Not connected</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">FMU CH-1</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 1</td></tr>
<tr data-pin="5"><td>5</td><td class="pin-sig">FMU CH-2</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 2</td></tr>
<tr data-pin="6"><td>6</td><td class="pin-sig">FMU CH-3</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 3</td></tr>
<tr data-pin="7"><td>7</td><td class="pin-sig">FMU CH-4</td><td><span class="pin-type pin-type--pwm">PWM</span></td><td class="pin-level">3.3 V</td><td>FMU PWM channel 4</td></tr>
<tr data-pin="8"><td>8</td><td class="pin-sig">GND</td><td><span class="pin-type pin-type--gnd">Ground</span></td><td class="pin-level">0 V</td><td>Ground</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-16" data-conn="16">
<p class="pin-sheet__eyebrow">16 · Bottom side · 4 pin</p>
<p class="pin-sheet__title">ETH1 (CM5)</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>CM5 Ethernet · via KSZ8795</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--eth pin-dot--one" data-pin="1" title="1 · RX-N"></span><span class="pin-dot pin-dot--eth" data-pin="2" title="2 · RX-P"></span><span class="pin-dot pin-dot--eth" data-pin="3" title="3 · TX-N"></span><span class="pin-dot pin-dot--eth" data-pin="4" title="4 · TX-P"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">RX-N</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 RX−</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">RX-P</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 RX+</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">TX-N</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 TX−</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">TX-P</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 1 TX+</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-17" data-conn="17">
<p class="pin-sheet__eyebrow">17 · Bottom side · 4 pin</p>
<p class="pin-sheet__title">ETH2 (CM5)</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>JST-GH · 4 pin</b></div>
<div><span>Interface</span><b>CM5 Ethernet · via KSZ8795</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<div class="pin-strip" aria-hidden="true"><span class="pin-dot pin-dot--eth pin-dot--one" data-pin="1" title="1 · RX-N"></span><span class="pin-dot pin-dot--eth" data-pin="2" title="2 · RX-P"></span><span class="pin-dot pin-dot--eth" data-pin="3" title="3 · TX-N"></span><span class="pin-dot pin-dot--eth" data-pin="4" title="4 · TX-P"></span></div>
<table class="pin-table">
<thead><tr><th>Pin</th><th>Signal</th><th>Type</th><th>Level</th><th>Description</th></tr></thead>
<tbody>
<tr data-pin="1"><td>1</td><td class="pin-sig">RX-N</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 RX−</td></tr>
<tr data-pin="2"><td>2</td><td class="pin-sig">RX-P</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 RX+</td></tr>
<tr data-pin="3"><td>3</td><td class="pin-sig">TX-N</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 TX−</td></tr>
<tr data-pin="4"><td>4</td><td class="pin-sig">TX-P</td><td><span class="pin-type pin-type--eth">Ethernet</span></td><td class="pin-level">—</td><td>Port 2 TX+</td></tr>
</tbody>
</table>
</section>
<section class="pin-sheet" id="light-18" data-conn="18">
<p class="pin-sheet__eyebrow">18 · Bottom side</p>
<p class="pin-sheet__title">CSI CAM 1</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>22-pin FFC · 0.5 mm</b></div>
<div><span>Interface</span><b>MIPI CSI camera / display</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
<section class="pin-sheet" id="light-19" data-conn="19">
<p class="pin-sheet__eyebrow">19 · Bottom side</p>
<p class="pin-sheet__title">CSI CAM 2</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>22-pin FFC · 0.5 mm</b></div>
<div><span>Interface</span><b>MIPI CSI camera / display</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
<section class="pin-sheet" id="light-20" data-conn="20">
<p class="pin-sheet__eyebrow">20 · Bottom side</p>
<p class="pin-sheet__title">CM5 MODULE</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>2 × 100-pin board-to-board</b></div>
<div><span>Interface</span><b>Raspberry Pi Compute Module 5</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
<section class="pin-sheet" id="light-21" data-conn="21">
<p class="pin-sheet__eyebrow">21 · Bottom side</p>
<p class="pin-sheet__title">CM5 SD CARD</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>microSD</b></div>
<div><span>Interface</span><b>CM5 storage (CM5 Lite)</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
<section class="pin-sheet" id="light-22" data-conn="22">
<p class="pin-sheet__eyebrow">22 · Bottom side</p>
<p class="pin-sheet__title">FMU SD CARD</p>
<div class="pin-sheet__facts">
<div><span>Connector</span><b>microSD</b></div>
<div><span>Interface</span><b>FMU logging</b></div>
<div><span>Location</span><b>Bottom side</b></div>
</div>
<p class="pin-sheet__note">Standard interface; no user wiring.</p>
</section>
</div>

</div>

!!! danger "Power Input"
    **12 POWER IN** accepts **3S-12S (9 V to 54 V)**. Observe correct polarity on the XT30 input; reverse polarity or over-voltage may permanently damage the board. **15 PWM1 (ESC)** pin 1 is the same battery rail (VIN).

!!! warning "Logic Levels"
    All signal pins are **3.3 V** only. Do not apply 5 V logic levels, and never source servo or motor power from the peripheral 5 V rail.
