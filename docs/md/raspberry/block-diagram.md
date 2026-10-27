# Block Diagram

## **Power**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 300" role="img" aria-label="Pi5 Autopilot power block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--power-port" x="30" y="120" width="176" height="56" rx="8"/>
  <text class="bd-title" x="118.0" y="145.5" text-anchor="middle">POWER IN</text>
  <text class="bd-sub" x="118.0" y="160.5" text-anchor="middle">XT30 · 12-26 VDC</text>
  <rect class="bd-box bd-box--power" x="280" y="112" width="200" height="72" rx="8"/>
  <text class="bd-title" x="380.0" y="145.5" text-anchor="middle">POWER UNIT</text>
  <text class="bd-sub" x="380.0" y="160.5" text-anchor="middle">Onboard regulator</text>
  <rect class="bd-box bd-box--hub" x="740" y="56" width="280" height="60" rx="12"/>
  <text class="bd-tag" x="754" y="76">STM32H753 + STM32F103</text>
  <text class="bd-title bd-title--hub" x="754" y="96">FMU UNIT</text>
  <rect class="bd-box bd-box--hub" x="740" y="180" width="280" height="60" rx="12"/>
  <text class="bd-tag" x="754" y="200">RASPBERRY PI CM5</text>
  <text class="bd-title bd-title--hub" x="754" y="220">CM5 UNIT</text>
  <path class="bd-wire bd-wire--power" d="M206.0 148.0 L280.0 148.0"/>
  <path class="bd-arrow bd-arrow--power" d="M280.0 148.0L272.0 151.5L272.0 144.5Z"/>
  <path class="bd-wire bd-wire--power" d="M480.0 148.0 L640.0 148.0"/>
  <text class="bd-wire-label bd-wire-label--power" x="560.0" y="138.0" text-anchor="middle">5V · 5A shared bus</text>
  <circle class="bd-dot bd-dot--power" cx="640.0" cy="148.0" r="3"/>
  <path class="bd-wire bd-wire--power" d="M640.0 86.0 L640.0 210.0"/>
  <path class="bd-wire bd-wire--power" d="M640.0 86.0 L740.0 86.0"/>
  <path class="bd-arrow bd-arrow--power" d="M740.0 86.0L732.0 89.5L732.0 82.5Z"/>
  <path class="bd-wire bd-wire--power" d="M640.0 210.0 L740.0 210.0"/>
  <path class="bd-arrow bd-arrow--power" d="M740.0 210.0L732.0 213.5L732.0 206.5Z"/>
  <path class="bd-wire bd-wire--power" d="M300 276 H324"/>
  <text class="bd-sub" x="332" y="280">Power</text>
  <rect class="bd-box bd-box--hub" x="450" y="269" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="280">Unit</text>
</svg>
</div>

## **FMU**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 880" role="img" aria-label="Pi5 Autopilot FMU block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--port" x="16" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="169.5" text-anchor="middle">SBUS</text>
  <text class="bd-sub" x="104.0" y="184.5" text-anchor="middle">5 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="223.5" text-anchor="middle">GPS-1</text>
  <text class="bd-sub" x="104.0" y="238.5" text-anchor="middle">10 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="277.5" text-anchor="middle">GPS-2</text>
  <text class="bd-sub" x="104.0" y="292.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="331.5" text-anchor="middle">I2C-2</text>
  <text class="bd-sub" x="104.0" y="346.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="385.5" text-anchor="middle">UART-4 &amp; I2C-3</text>
  <text class="bd-sub" x="104.0" y="400.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="439.5" text-anchor="middle">TELEM-1</text>
  <text class="bd-sub" x="104.0" y="454.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="474" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="493.5" text-anchor="middle">TELEM-2</text>
  <text class="bd-sub" x="104.0" y="508.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="528" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="547.5" text-anchor="middle">SPI-6</text>
  <text class="bd-sub" x="104.0" y="562.5" text-anchor="middle">11 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="582" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="601.5" text-anchor="middle">CAN</text>
  <text class="bd-sub" x="104.0" y="616.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="636" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="655.5" text-anchor="middle">ETHERNET</text>
  <text class="bd-sub" x="104.0" y="670.5" text-anchor="middle">100 Mbps · 4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--chip" x="868" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="169.5" text-anchor="middle">ICM-42670</text>
  <text class="bd-sub" x="956.0" y="184.5" text-anchor="middle">SPI · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="223.5" text-anchor="middle">BMP390</text>
  <text class="bd-sub" x="956.0" y="238.5" text-anchor="middle">I2C · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="277.5" text-anchor="middle">SE050</text>
  <text class="bd-sub" x="956.0" y="292.5" text-anchor="middle">I2C · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="331.5" text-anchor="middle">FRAM</text>
  <text class="bd-sub" x="956.0" y="346.5" text-anchor="middle">SPI · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="385.5" text-anchor="middle">AT24C02D</text>
  <text class="bd-sub" x="956.0" y="400.5" text-anchor="middle">I2C · onboard</text>
  <rect class="bd-box bd-box--port" x="868" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="439.5" text-anchor="middle">FMU SD CARD</text>
  <text class="bd-sub" x="956.0" y="454.5" text-anchor="middle">Micro-SD</text>
  <rect class="bd-box bd-box--port" x="330" y="40" width="176" height="44" rx="8"/>
  <text class="bd-title" x="418.0" y="59.5" text-anchor="middle">USB 2.0</text>
  <text class="bd-sub" x="418.0" y="74.5" text-anchor="middle">Type-C</text>
  <path class="bd-wire bd-wire--data" d="M418.0 84.0 L418.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M418.0 200.0L414.5 192.0L421.5 192.0Z"/>
  <rect class="bd-box bd-box--port" x="530" y="40" width="176" height="44" rx="8"/>
  <text class="bd-title" x="618.0" y="59.5" text-anchor="middle">FMU &amp; IO DEBUG</text>
  <text class="bd-sub" x="618.0" y="74.5" text-anchor="middle">10 Pin · JST-SH</text>
  <path class="bd-wire bd-wire--data" d="M618.0 84.0 L618.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M618.0 200.0L614.5 192.0L621.5 192.0Z"/>
  <rect class="bd-box bd-box--port" x="730" y="40" width="176" height="44" rx="8"/>
  <text class="bd-title" x="818.0" y="59.5" text-anchor="middle">FMU &amp; IO PWM</text>
  <text class="bd-sub" x="818.0" y="74.5" text-anchor="middle">10 Pin · JST-GH</text>
  <path class="bd-wire bd-wire--data" d="M818.0 84.0 L818.0 140.0 L640.0 140.0 L640.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M640.0 200.0L636.5 192.0L643.5 192.0Z"/>
  <rect class="bd-box bd-box--hub" x="400" y="200" width="260" height="420" rx="12"/>
  <text class="bd-tag" x="414" y="220">FMU UNIT</text>
  <text class="bd-title bd-title--hub" x="414" y="240">STM32H753 + STM32F103</text>
  <text class="bd-sub" x="414" y="260">Flight management + IO co-processor</text>
  <path class="bd-wire bd-wire--data" d="M192.0 172.0 L300.0 172.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="172.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 226.0 L300.0 226.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="226.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 280.0 L300.0 280.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="280.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 334.0 L300.0 334.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="334.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 388.0 L300.0 388.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="388.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 442.0 L300.0 442.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="442.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 496.0 L300.0 496.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="496.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 550.0 L300.0 550.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="550.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 604.0 L300.0 604.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="604.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 658.0 L300.0 658.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="658.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M300.0 172.0 L300.0 658.0"/>
  <path class="bd-wire bd-wire--data" d="M300.0 410.0 L400.0 410.0"/>
  <path class="bd-arrow bd-arrow--data" d="M400.0 410.0L392.0 413.5L392.0 406.5Z"/>
  <path class="bd-wire bd-wire--data" d="M868.0 172.0 L760.0 172.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="172.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 226.0 L760.0 226.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="226.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 280.0 L760.0 280.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="280.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 334.0 L760.0 334.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="334.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 388.0 L760.0 388.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="388.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 442.0 L760.0 442.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="442.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M760.0 172.0 L760.0 442.0"/>
  <path class="bd-wire bd-wire--data" d="M760.0 350.0 L660.0 350.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 350.0L668.0 346.5L668.0 353.5Z"/>
  <rect class="bd-box bd-box--hub" x="868" y="490" width="176" height="196" rx="12"/>
  <text class="bd-tag" x="882" y="510">EXTERNAL IMU</text>
  <text class="bd-title bd-title--hub" x="882" y="530">SENSOR BOARD</text>
  <rect class="bd-chip" x="880" y="546" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="560">BMI270</text>
  <text class="bd-chip-bus" x="1024" y="560" text-anchor="end">SPI</text>
  <rect class="bd-chip" x="880" y="572" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="586">ICM-42670</text>
  <text class="bd-chip-bus" x="1024" y="586" text-anchor="end">SPI</text>
  <rect class="bd-chip" x="880" y="598" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="612">BMP390</text>
  <text class="bd-chip-bus" x="1024" y="612" text-anchor="end">I2C</text>
  <rect class="bd-chip" x="880" y="624" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="638">BMM350</text>
  <text class="bd-chip-bus" x="1024" y="638" text-anchor="end">I2C</text>
  <rect class="bd-chip" x="880" y="650" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="664">24LC64T</text>
  <text class="bd-chip-bus" x="1024" y="664" text-anchor="end">I2C</text>
  <path class="bd-wire bd-wire--data" d="M868.0 588.0 L660.0 588.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 588.0L668.0 584.5L668.0 591.5Z"/>
  <rect class="bd-box bd-box--link" x="430" y="680" width="200" height="50" rx="8"/>
  <text class="bd-title" x="530.0" y="702.5" text-anchor="middle">FMU → CM5</text>
  <text class="bd-sub" x="530.0" y="717.5" text-anchor="middle">TELEM-3 (USART2) · to CM5 UART3</text>
  <path class="bd-wire bd-wire--data" d="M530.0 620.0 L530.0 680.0"/>
  <path class="bd-arrow bd-arrow--data" d="M530.0 680.0L526.5 672.0L533.5 672.0Z"/>
  <path class="bd-wire bd-wire--data" d="M300 850 H324"/>
  <text class="bd-sub" x="332" y="854">Data / signal</text>
  <rect class="bd-box bd-box--hub" x="450" y="843" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="854">Unit</text>
  <rect class="bd-box bd-box--chip" x="600" y="843" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="632" y="854">Onboard IC</text>
  <rect class="bd-box bd-box--link" x="750" y="843" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="782" y="854">Inter-unit link</text>
</svg>
</div>

## **RPI CM5**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 760" role="img" aria-label="Pi5 Autopilot CM5 block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--port" x="16" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="169.5" text-anchor="middle">USB 2.0</text>
  <text class="bd-sub" x="104.0" y="184.5" text-anchor="middle">Micro-B</text>
  <rect class="bd-box bd-box--port" x="16" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="223.5" text-anchor="middle">I2C-1 &amp; I2C-3</text>
  <text class="bd-sub" x="104.0" y="238.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="277.5" text-anchor="middle">GPIO-22/27 &amp; UART-2</text>
  <text class="bd-sub" x="104.0" y="292.5" text-anchor="middle">10 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="331.5" text-anchor="middle">SPI1_CS1 &amp; PWM1/4</text>
  <text class="bd-sub" x="104.0" y="346.5" text-anchor="middle">10 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="385.5" text-anchor="middle">CSI-1</text>
  <text class="bd-sub" x="104.0" y="400.5" text-anchor="middle">22 Pin · 0.5 mm FFC</text>
  <rect class="bd-box bd-box--port" x="16" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="439.5" text-anchor="middle">CSI-2</text>
  <text class="bd-sub" x="104.0" y="454.5" text-anchor="middle">22 Pin · 0.5 mm FFC</text>
  <rect class="bd-box bd-box--port" x="16" y="474" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="493.5" text-anchor="middle">ETHERNET</text>
  <text class="bd-sub" x="104.0" y="508.5" text-anchor="middle">1 Gbps · 8 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="528" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="547.5" text-anchor="middle">USB 3.0</text>
  <text class="bd-sub" x="104.0" y="562.5" text-anchor="middle">Type-C (A)</text>
  <rect class="bd-box bd-box--port" x="868" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="169.5" text-anchor="middle">CM5 SD CARD</text>
  <text class="bd-sub" x="956.0" y="184.5" text-anchor="middle">Micro-SD · CM5 Lite only</text>
  <rect class="bd-box bd-box--port" x="868" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="223.5" text-anchor="middle">HDMI</text>
  <text class="bd-sub" x="956.0" y="238.5" text-anchor="middle">Micro HDMI</text>
  <rect class="bd-box bd-box--port" x="868" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="277.5" text-anchor="middle">SYS_FAN</text>
  <text class="bd-sub" x="956.0" y="292.5" text-anchor="middle">4 Pin · JST-SH</text>
  <rect class="bd-box bd-box--chip" x="868" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="331.5" text-anchor="middle">BMI270</text>
  <text class="bd-sub" x="956.0" y="346.5" text-anchor="middle">SPI1_CS2 · onboard</text>
  <rect class="bd-box bd-box--port" x="868" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="385.5" text-anchor="middle">CAN</text>
  <text class="bd-sub" x="956.0" y="400.5" text-anchor="middle">SPI1_CS0 · 4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="868" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="439.5" text-anchor="middle">DIP SWITCH</text>
  <text class="bd-sub" x="956.0" y="454.5" text-anchor="middle">8 Pin</text>
  <rect class="bd-box bd-box--port" x="868" y="474" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="493.5" text-anchor="middle">USB 3.0</text>
  <text class="bd-sub" x="956.0" y="508.5" text-anchor="middle">Type-C (B)</text>
  <rect class="bd-box bd-box--port" x="440" y="40" width="180" height="44" rx="8"/>
  <text class="bd-title" x="530.0" y="59.5" text-anchor="middle">M.2 KEY-M</text>
  <text class="bd-sub" x="530.0" y="74.5" text-anchor="middle">2230 / 2242 · PCIe</text>
  <path class="bd-wire bd-wire--data" d="M530.0 84.0 L530.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M530.0 200.0L526.5 192.0L533.5 192.0Z"/>
  <rect class="bd-box bd-box--hub" x="400" y="200" width="260" height="400" rx="12"/>
  <text class="bd-tag" x="414" y="220">COMPUTE MODULE</text>
  <text class="bd-title bd-title--hub" x="414" y="240">RASPBERRY PI CM5</text>
  <text class="bd-sub" x="414" y="260">Mission computer</text>
  <path class="bd-wire bd-wire--data" d="M192.0 172.0 L300.0 172.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="172.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 226.0 L300.0 226.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="226.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 280.0 L300.0 280.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="280.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 334.0 L300.0 334.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="334.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 388.0 L300.0 388.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="388.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 442.0 L300.0 442.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="442.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 496.0 L300.0 496.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="496.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 550.0 L300.0 550.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="550.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M300.0 172.0 L300.0 550.0"/>
  <path class="bd-wire bd-wire--data" d="M300.0 400.0 L400.0 400.0"/>
  <path class="bd-arrow bd-arrow--data" d="M400.0 400.0L392.0 403.5L392.0 396.5Z"/>
  <path class="bd-wire bd-wire--data" d="M868.0 172.0 L760.0 172.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="172.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 226.0 L760.0 226.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="226.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 280.0 L760.0 280.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="280.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 334.0 L760.0 334.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="334.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 388.0 L760.0 388.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="388.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 442.0 L760.0 442.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="442.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 496.0 L760.0 496.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="496.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M760.0 172.0 L760.0 496.0"/>
  <path class="bd-wire bd-wire--data" d="M760.0 400.0 L660.0 400.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 400.0L668.0 396.5L668.0 403.5Z"/>
  <rect class="bd-box bd-box--link" x="430" y="640" width="200" height="50" rx="8"/>
  <text class="bd-title" x="530.0" y="662.5" text-anchor="middle">CM5 → FMU</text>
  <text class="bd-sub" x="530.0" y="677.5" text-anchor="middle">UART3 · to FMU TELEM-3 (USART2)</text>
  <path class="bd-wire bd-wire--data" d="M530.0 600.0 L530.0 640.0"/>
  <path class="bd-arrow bd-arrow--data" d="M530.0 640.0L526.5 632.0L533.5 632.0Z"/>
  <path class="bd-wire bd-wire--data" d="M300 728 H324"/>
  <text class="bd-sub" x="332" y="732">Data / signal</text>
  <rect class="bd-box bd-box--hub" x="450" y="721" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="732">Unit</text>
  <rect class="bd-box bd-box--chip" x="600" y="721" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="632" y="732">Onboard IC</text>
  <rect class="bd-box bd-box--link" x="750" y="721" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="782" y="732">Inter-unit link</text>
</svg>
</div>
