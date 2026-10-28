# Block Diagram

## **Power**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 300" role="img" aria-label="Pi5 Light Autopilot power block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--power-port" x="30" y="120" width="176" height="56" rx="8"/>
  <text class="bd-title" x="118.0" y="145.5" text-anchor="middle">POWER IN</text>
  <text class="bd-sub" x="118.0" y="160.5" text-anchor="middle">XT30 · 3S-12S (9-54 VDC)</text>
  <rect class="bd-box bd-box--power" x="320" y="112" width="200" height="72" rx="8"/>
  <text class="bd-title" x="420.0" y="145.5" text-anchor="middle">POWER UNIT</text>
  <text class="bd-sub" x="420.0" y="160.5" text-anchor="middle">5 V system rail</text>
  <rect class="bd-box bd-box--hub" x="760" y="56" width="260" height="60" rx="12"/>
  <text class="bd-tag" x="774" y="76">STM32H753</text>
  <text class="bd-title bd-title--hub" x="774" y="96">FMU UNIT</text>
  <rect class="bd-box bd-box--hub" x="760" y="180" width="260" height="60" rx="12"/>
  <text class="bd-tag" x="774" y="200">RASPBERRY PI CM5</text>
  <text class="bd-title bd-title--hub" x="774" y="220">CM5 UNIT</text>
  <path class="bd-wire bd-wire--power" d="M206.0 148.0 L320.0 148.0"/>
  <path class="bd-arrow bd-arrow--power" d="M320.0 148.0L312.0 151.5L312.0 144.5Z"/>
  <text class="bd-wire-label bd-wire-label--power" x="263.0" y="140.0" text-anchor="middle">VIN</text>
  <path class="bd-wire bd-wire--power" d="M520.0 148.0 L640.0 148.0"/>
  <text class="bd-wire-label bd-wire-label--power" x="580.0" y="140.0" text-anchor="middle">5 V</text>
  <circle class="bd-dot bd-dot--power" cx="640.0" cy="148.0" r="3"/>
  <path class="bd-wire bd-wire--power" d="M640.0 86.0 L640.0 210.0"/>
  <path class="bd-wire bd-wire--power" d="M640.0 86.0 L760.0 86.0"/>
  <path class="bd-arrow bd-arrow--power" d="M760.0 86.0L752.0 89.5L752.0 82.5Z"/>
  <path class="bd-wire bd-wire--power" d="M640.0 210.0 L760.0 210.0"/>
  <path class="bd-arrow bd-arrow--power" d="M760.0 210.0L752.0 213.5L752.0 206.5Z"/>
  <path class="bd-wire bd-wire--power" d="M300 276 H324"/>
  <text class="bd-sub" x="332" y="280">Power</text>
  <rect class="bd-box bd-box--hub" x="450" y="269" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="280">Unit</text>
</svg>
</div>

## **FMU**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 800" role="img" aria-label="Pi5 Light Autopilot FMU block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--port" x="16" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="169.5" text-anchor="middle">RC IN</text>
  <text class="bd-sub" x="104.0" y="184.5" text-anchor="middle">3 Pin · JST-GH · SBUS / PPM</text>
  <rect class="bd-box bd-box--port" x="16" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="223.5" text-anchor="middle">TELEM1</text>
  <text class="bd-sub" x="104.0" y="238.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="277.5" text-anchor="middle">TELEM2</text>
  <text class="bd-sub" x="104.0" y="292.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="331.5" text-anchor="middle">GPS1</text>
  <text class="bd-sub" x="104.0" y="346.5" text-anchor="middle">10 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="385.5" text-anchor="middle">GPS2</text>
  <text class="bd-sub" x="104.0" y="400.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="439.5" text-anchor="middle">UART4 &amp; I2C3</text>
  <text class="bd-sub" x="104.0" y="454.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="474" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="493.5" text-anchor="middle">I2C2</text>
  <text class="bd-sub" x="104.0" y="508.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="528" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="547.5" text-anchor="middle">CANBUS</text>
  <text class="bd-sub" x="104.0" y="562.5" text-anchor="middle">4 Pin · JST-GH · TJA1051</text>
  <rect class="bd-box bd-box--port" x="16" y="582" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="601.5" text-anchor="middle">PWM1 (ESC)</text>
  <text class="bd-sub" x="104.0" y="616.5" text-anchor="middle">8 Pin · JST-SH · CH1-4</text>
  <rect class="bd-box bd-box--port" x="16" y="636" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="655.5" text-anchor="middle">PWM2</text>
  <text class="bd-sub" x="104.0" y="670.5" text-anchor="middle">6 Pin · JST-GH · CH5-9</text>
  <rect class="bd-box bd-box--chip" x="868" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="169.5" text-anchor="middle">ICM-42688-P</text>
  <text class="bd-sub" x="956.0" y="184.5" text-anchor="middle">SPI1 · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="223.5" text-anchor="middle">ICM-45686</text>
  <text class="bd-sub" x="956.0" y="238.5" text-anchor="middle">SPI2 · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="277.5" text-anchor="middle">BMP581</text>
  <text class="bd-sub" x="956.0" y="292.5" text-anchor="middle">I2C · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="331.5" text-anchor="middle">IST8310</text>
  <text class="bd-sub" x="956.0" y="346.5" text-anchor="middle">I2C4 · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="385.5" text-anchor="middle">FRAM</text>
  <text class="bd-sub" x="956.0" y="400.5" text-anchor="middle">SPI5 · onboard</text>
  <rect class="bd-box bd-box--port" x="330" y="40" width="176" height="44" rx="8"/>
  <text class="bd-title" x="418.0" y="59.5" text-anchor="middle">USB 2.0</text>
  <text class="bd-sub" x="418.0" y="74.5" text-anchor="middle">Type-C</text>
  <path class="bd-wire bd-wire--data" d="M418.0 84.0 L418.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M418.0 200.0L414.5 192.0L421.5 192.0Z"/>
  <rect class="bd-box bd-box--port" x="530" y="40" width="176" height="44" rx="8"/>
  <text class="bd-title" x="618.0" y="59.5" text-anchor="middle">FMU DEBUG</text>
  <text class="bd-sub" x="618.0" y="74.5" text-anchor="middle">6 Pin · JST-SH · SWD</text>
  <path class="bd-wire bd-wire--data" d="M618.0 84.0 L618.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M618.0 200.0L614.5 192.0L621.5 192.0Z"/>
  <rect class="bd-box bd-box--port" x="730" y="40" width="176" height="44" rx="8"/>
  <text class="bd-title" x="818.0" y="59.5" text-anchor="middle">FMU SD CARD</text>
  <text class="bd-sub" x="818.0" y="74.5" text-anchor="middle">Micro-SD</text>
  <path class="bd-wire bd-wire--data" d="M818.0 84.0 L818.0 140.0 L640.0 140.0 L640.0 200.0"/>
  <path class="bd-arrow bd-arrow--data" d="M640.0 200.0L636.5 192.0L643.5 192.0Z"/>
  <rect class="bd-box bd-box--hub" x="400" y="200" width="260" height="420" rx="12"/>
  <text class="bd-tag" x="414" y="220">FMU UNIT</text>
  <text class="bd-title bd-title--hub" x="414" y="240">STM32H753</text>
  <text class="bd-sub" x="414" y="260">Flight management · no IO co-processor</text>
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
  <path class="bd-wire bd-wire--data" d="M760.0 172.0 L760.0 388.0"/>
  <path class="bd-wire bd-wire--data" d="M760.0 330.0 L660.0 330.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 330.0L668.0 326.5L668.0 333.5Z"/>
  <rect class="bd-box bd-box--link" x="430" y="670" width="200" height="50" rx="8"/>
  <text class="bd-title" x="530.0" y="692.5" text-anchor="middle">FMU ↔ CM5</text>
  <text class="bd-sub" x="530.0" y="707.5" text-anchor="middle">SERIAL7 (USART2) ↔ CM5 UART3</text>
  <path class="bd-wire bd-wire--data" d="M530.0 620.0 L530.0 670.0"/>
  <path class="bd-arrow bd-arrow--data" d="M530.0 670.0L526.5 662.0L533.5 662.0Z"/>
  <path class="bd-wire bd-wire--data" d="M300 770 H324"/>
  <text class="bd-sub" x="332" y="774">Data / signal</text>
  <rect class="bd-box bd-box--hub" x="450" y="763" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="774">Unit</text>
  <rect class="bd-box bd-box--chip" x="600" y="763" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="632" y="774">Onboard IC</text>
  <rect class="bd-box bd-box--link" x="750" y="763" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="782" y="774">Inter-unit link</text>
</svg>
</div>

## **RPI CM5**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 640" role="img" aria-label="Pi5 Light Autopilot CM5 block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--port" x="16" y="190" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="209.5" text-anchor="middle">CSI CAM 1</text>
  <text class="bd-sub" x="104.0" y="224.5" text-anchor="middle">22 Pin · 0.5 mm FFC</text>
  <rect class="bd-box bd-box--port" x="16" y="244" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="263.5" text-anchor="middle">CSI CAM 2</text>
  <text class="bd-sub" x="104.0" y="278.5" text-anchor="middle">22 Pin · 0.5 mm FFC</text>
  <rect class="bd-box bd-box--port" x="16" y="298" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="317.5" text-anchor="middle">CM5 SD CARD</text>
  <text class="bd-sub" x="104.0" y="332.5" text-anchor="middle">Micro-SD · CM5 Lite only</text>
  <rect class="bd-box bd-box--port" x="16" y="352" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="371.5" text-anchor="middle">CM5 FAN</text>
  <text class="bd-sub" x="104.0" y="386.5" text-anchor="middle">4 Pin · JST-SH</text>
  <rect class="bd-box bd-box--port" x="430" y="40" width="200" height="44" rx="8"/>
  <text class="bd-title" x="530.0" y="59.5" text-anchor="middle">M.2 M-KEY</text>
  <text class="bd-sub" x="530.0" y="74.5" text-anchor="middle">PCIe · Hailo / SSD / DX-M1M</text>
  <path class="bd-wire bd-wire--data" d="M530.0 84.0 L530.0 150.0"/>
  <path class="bd-arrow bd-arrow--data" d="M530.0 150.0L526.5 142.0L533.5 142.0Z"/>
  <rect class="bd-box bd-box--hub" x="400" y="150" width="260" height="300" rx="12"/>
  <text class="bd-tag" x="414" y="170">COMPUTE MODULE</text>
  <text class="bd-title bd-title--hub" x="414" y="190">RASPBERRY PI CM5</text>
  <text class="bd-sub" x="414" y="210">Mission computer · 2 × 100-pin</text>
  <path class="bd-wire bd-wire--data" d="M192.0 212.0 L300.0 212.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="212.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 266.0 L300.0 266.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="266.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 320.0 L300.0 320.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="320.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M192.0 374.0 L300.0 374.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="374.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M300.0 212.0 L300.0 374.0"/>
  <path class="bd-wire bd-wire--data" d="M300.0 300.0 L400.0 300.0"/>
  <path class="bd-arrow bd-arrow--data" d="M400.0 300.0L392.0 303.5L392.0 296.5Z"/>
  <rect class="bd-box bd-box--block" x="730" y="250" width="200" height="60" rx="8"/>
  <text class="bd-title" x="830.0" y="277.5" text-anchor="middle">ETHERNET SWITCH</text>
  <text class="bd-sub" x="830.0" y="292.5" text-anchor="middle">KSZ8795 · 10/100</text>
  <path class="bd-wire bd-wire--data" d="M660.0 280.0 L730.0 280.0"/>
  <path class="bd-arrow bd-arrow--data" d="M730.0 280.0L722.0 283.5L722.0 276.5Z"/>
  <text class="bd-wire-label bd-wire-label--data" x="695.0" y="272.0" text-anchor="middle">100 Mbps</text>
  <rect class="bd-box bd-box--port" x="760" y="120" width="176" height="44" rx="8"/>
  <text class="bd-title" x="848.0" y="139.5" text-anchor="middle">ETH1 (CM5)</text>
  <text class="bd-sub" x="848.0" y="154.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="760" y="400" width="176" height="44" rx="8"/>
  <text class="bd-title" x="848.0" y="419.5" text-anchor="middle">ETH2 (CM5)</text>
  <text class="bd-sub" x="848.0" y="434.5" text-anchor="middle">4 Pin · JST-GH</text>
  <path class="bd-wire bd-wire--data" d="M848.0 250.0 L848.0 164.0"/>
  <path class="bd-wire bd-wire--data" d="M848.0 310.0 L848.0 400.0"/>
  <rect class="bd-box bd-box--link" x="430" y="510" width="200" height="50" rx="8"/>
  <text class="bd-title" x="530.0" y="532.5" text-anchor="middle">CM5 ↔ FMU</text>
  <text class="bd-sub" x="530.0" y="547.5" text-anchor="middle">UART3 ↔ FMU SERIAL7 (USART2)</text>
  <path class="bd-wire bd-wire--data" d="M530.0 450.0 L530.0 510.0"/>
  <path class="bd-arrow bd-arrow--data" d="M530.0 510.0L526.5 502.0L533.5 502.0Z"/>
  <path class="bd-wire bd-wire--data" d="M300 610 H324"/>
  <text class="bd-sub" x="332" y="614">Data / signal</text>
  <rect class="bd-box bd-box--hub" x="450" y="603" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="614">Unit</text>
  <rect class="bd-box bd-box--chip" x="600" y="603" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="632" y="614">Onboard IC</text>
  <rect class="bd-box bd-box--link" x="750" y="603" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="782" y="614">Inter-unit link</text>
</svg>
</div>
