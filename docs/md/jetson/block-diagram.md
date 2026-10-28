# Block Diagram

## **Power**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 380" role="img" aria-label="Jetson Autopilot power block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--power-port" x="30" y="158" width="176" height="56" rx="8"/>
  <text class="bd-title" x="118.0" y="183.5" text-anchor="middle">POWER IN</text>
  <text class="bd-sub" x="118.0" y="198.5" text-anchor="middle">XT30 · 9-26 VDC (3S-6S)</text>
  <rect class="bd-box bd-box--power" x="280" y="136" width="220" height="100" rx="8"/>
  <text class="bd-title" x="390.0" y="170.5" text-anchor="middle">POWER SYSTEM</text>
  <text class="bd-sub" x="390.0" y="185.5" text-anchor="middle">Reverse protection</text>
  <text class="bd-sub" x="390.0" y="198.5" text-anchor="middle">Over-current sensing</text>
  <text class="bd-sub" x="390.0" y="211.5" text-anchor="middle">Voltage &amp; I2C current monitor</text>
  <rect class="bd-box bd-box--hub" x="740" y="40" width="280" height="60" rx="12"/>
  <text class="bd-tag" x="754" y="60">LECTRON V6X</text>
  <text class="bd-title bd-title--hub" x="754" y="80">FMU UNIT</text>
  <rect class="bd-box bd-box--hub" x="740" y="156" width="280" height="60" rx="12"/>
  <text class="bd-tag" x="754" y="176">NVIDIA JETSON</text>
  <text class="bd-title bd-title--hub" x="754" y="196">JETSON MODULE</text>
  <rect class="bd-box bd-box--power-port" x="740" y="272" width="280" height="60" rx="8"/>
  <text class="bd-title" x="880.0" y="299.5" text-anchor="middle">12V · 2A OUT</text>
  <text class="bd-sub" x="880.0" y="314.5" text-anchor="middle">4 Pin · JST-GH · sensors / actuators</text>
  <path class="bd-wire bd-wire--power" d="M206.0 186.0 L280.0 186.0"/>
  <path class="bd-arrow bd-arrow--power" d="M280.0 186.0L272.0 189.5L272.0 182.5Z"/>
  <path class="bd-wire bd-wire--power" d="M500.0 186.0 L600.0 186.0 L600.0 70.0 L740.0 70.0"/>
  <path class="bd-arrow bd-arrow--power" d="M740.0 70.0L732.0 73.5L732.0 66.5Z"/>
  <text class="bd-wire-label bd-wire-label--power" x="670.0" y="62.0" text-anchor="middle">5.0 V · 3 A</text>
  <path class="bd-wire bd-wire--power" d="M500.0 186.0 L600.0 186.0 L600.0 186.0 L740.0 186.0"/>
  <path class="bd-arrow bd-arrow--power" d="M740.0 186.0L732.0 189.5L732.0 182.5Z"/>
  <text class="bd-wire-label bd-wire-label--power" x="670.0" y="178.0" text-anchor="middle">5.1 V · 5 A</text>
  <path class="bd-wire bd-wire--power" d="M500.0 186.0 L600.0 186.0 L600.0 302.0 L740.0 302.0"/>
  <path class="bd-arrow bd-arrow--power" d="M740.0 302.0L732.0 305.5L732.0 298.5Z"/>
  <text class="bd-wire-label bd-wire-label--power" x="670.0" y="294.0" text-anchor="middle">12 V · 2 A</text>
  <circle class="bd-dot bd-dot--power" cx="600.0" cy="186.0" r="3"/>
  <path class="bd-wire bd-wire--power" d="M300 360 H324"/>
  <text class="bd-sub" x="332" y="364">Power</text>
  <rect class="bd-box bd-box--hub" x="450" y="353" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="364">Unit</text>
</svg>
</div>

## **FMU**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 880" role="img" aria-label="Jetson Autopilot FMU block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--port" x="16" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="169.5" text-anchor="middle">I2C1</text>
  <text class="bd-sub" x="104.0" y="184.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="223.5" text-anchor="middle">TELEM-1</text>
  <text class="bd-sub" x="104.0" y="238.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="277.5" text-anchor="middle">TELEM-2</text>
  <text class="bd-sub" x="104.0" y="292.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="331.5" text-anchor="middle">TELEM-3</text>
  <text class="bd-sub" x="104.0" y="346.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="385.5" text-anchor="middle">CAN</text>
  <text class="bd-sub" x="104.0" y="400.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="439.5" text-anchor="middle">GPS-1</text>
  <text class="bd-sub" x="104.0" y="454.5" text-anchor="middle">10 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="474" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="493.5" text-anchor="middle">GPS-2</text>
  <text class="bd-sub" x="104.0" y="508.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="528" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="547.5" text-anchor="middle">RC-SBUS</text>
  <text class="bd-sub" x="104.0" y="562.5" text-anchor="middle">5 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="582" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="601.5" text-anchor="middle">I2C3</text>
  <text class="bd-sub" x="104.0" y="616.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="636" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="655.5" text-anchor="middle">UART4</text>
  <text class="bd-sub" x="104.0" y="670.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="690" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="709.5" text-anchor="middle">SPI-6</text>
  <text class="bd-sub" x="104.0" y="724.5" text-anchor="middle">11 Pin · JST-GH</text>
  <rect class="bd-box bd-box--chip" x="868" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="169.5" text-anchor="middle">ICM-42670</text>
  <text class="bd-sub" x="956.0" y="184.5" text-anchor="middle">SPI · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="223.5" text-anchor="middle">BMP390</text>
  <text class="bd-sub" x="956.0" y="238.5" text-anchor="middle">I2C · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="277.5" text-anchor="middle">FRAM</text>
  <text class="bd-sub" x="956.0" y="292.5" text-anchor="middle">SPI · onboard</text>
  <rect class="bd-box bd-box--chip" x="868" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="331.5" text-anchor="middle">SE051</text>
  <text class="bd-sub" x="956.0" y="346.5" text-anchor="middle">I2C · onboard</text>
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
  <rect class="bd-box bd-box--hub" x="400" y="200" width="260" height="460" rx="12"/>
  <text class="bd-tag" x="414" y="220">FMU UNIT · LECTRON V6X</text>
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
  <path class="bd-wire bd-wire--data" d="M192.0 712.0 L300.0 712.0"/>
  <circle class="bd-dot bd-dot--data" cx="300.0" cy="712.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M300.0 172.0 L300.0 712.0"/>
  <path class="bd-wire bd-wire--data" d="M300.0 430.0 L400.0 430.0"/>
  <path class="bd-arrow bd-arrow--data" d="M400.0 430.0L392.0 433.5L392.0 426.5Z"/>
  <path class="bd-wire bd-wire--data" d="M868.0 172.0 L760.0 172.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="172.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 226.0 L760.0 226.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="226.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 280.0 L760.0 280.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="280.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M868.0 334.0 L760.0 334.0"/>
  <circle class="bd-dot bd-dot--data" cx="760.0" cy="334.0" r="3"/>
  <path class="bd-wire bd-wire--data" d="M760.0 172.0 L760.0 334.0"/>
  <path class="bd-wire bd-wire--data" d="M760.0 270.0 L660.0 270.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 270.0L668.0 266.5L668.0 273.5Z"/>
  <rect class="bd-box bd-box--hub" x="868" y="382" width="176" height="196" rx="12"/>
  <text class="bd-tag" x="882" y="402">SENSOR BOARD</text>
  <text class="bd-title bd-title--hub" x="882" y="422">LECTRON IMU-01</text>
  <rect class="bd-chip" x="880" y="438" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="452">BMI270</text>
  <text class="bd-chip-bus" x="1024" y="452" text-anchor="end">SPI</text>
  <rect class="bd-chip" x="880" y="464" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="478">ICM-42670</text>
  <text class="bd-chip-bus" x="1024" y="478" text-anchor="end">SPI</text>
  <rect class="bd-chip" x="880" y="490" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="504">BMP390</text>
  <text class="bd-chip-bus" x="1024" y="504" text-anchor="end">I2C</text>
  <rect class="bd-chip" x="880" y="516" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="530">BMM350</text>
  <text class="bd-chip-bus" x="1024" y="530" text-anchor="end">I2C</text>
  <rect class="bd-chip" x="880" y="542" width="152" height="20" rx="5"/>
  <text class="bd-chip-text" x="888" y="556">24LC64T</text>
  <text class="bd-chip-bus" x="1024" y="556" text-anchor="end">I2C</text>
  <path class="bd-wire bd-wire--data" d="M868.0 480.0 L660.0 480.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 480.0L668.0 476.5L668.0 483.5Z"/>
  <rect class="bd-box bd-box--link" x="330" y="716" width="196" height="50" rx="8"/>
  <text class="bd-title" x="428.0" y="738.5" text-anchor="middle">FMU ↔ JETSON</text>
  <text class="bd-sub" x="428.0" y="753.5" text-anchor="middle">TELEM-3 (USART2) ↔ UART0 *</text>
  <rect class="bd-box bd-box--link" x="538" y="716" width="196" height="50" rx="8"/>
  <text class="bd-title" x="636.0" y="738.5" text-anchor="middle">ETHERNET</text>
  <text class="bd-sub" x="636.0" y="753.5" text-anchor="middle">100 Mbps · via KSZ8795 switch</text>
  <path class="bd-wire bd-wire--data" d="M428.0 660.0 L428.0 716.0"/>
  <path class="bd-arrow bd-arrow--data" d="M428.0 716.0L424.5 708.0L431.5 708.0Z"/>
  <path class="bd-wire bd-wire--data" d="M636.0 660.0 L636.0 716.0"/>
  <path class="bd-arrow bd-arrow--data" d="M636.0 716.0L632.5 708.0L639.5 708.0Z"/>
  <text class="bd-sub" x="330" y="792">* Bridged by default; remove the bridge resistors to use the ports separately.</text>
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

## **Jetson Module**

<div class="bd-viewer">
<svg class="bd-svg" viewBox="0 0 1060 860" role="img" aria-label="Jetson Autopilot Jetson module block diagram" xmlns="http://www.w3.org/2000/svg">
  <rect class="bd-box bd-box--port" x="16" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="169.5" text-anchor="middle">USB 3.0</text>
  <text class="bd-sub" x="104.0" y="184.5" text-anchor="middle">Type-C</text>
  <rect class="bd-box bd-box--port" x="16" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="223.5" text-anchor="middle">USB 2.0</text>
  <text class="bd-sub" x="104.0" y="238.5" text-anchor="middle">Mini USB</text>
  <rect class="bd-box bd-box--port" x="16" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="277.5" text-anchor="middle">SD CARD</text>
  <text class="bd-sub" x="104.0" y="292.5" text-anchor="middle">Micro-SD</text>
  <rect class="bd-box bd-box--port" x="16" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="331.5" text-anchor="middle">GPIO</text>
  <text class="bd-sub" x="104.0" y="346.5" text-anchor="middle">10 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="385.5" text-anchor="middle">SPI</text>
  <text class="bd-sub" x="104.0" y="400.5" text-anchor="middle">6 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="439.5" text-anchor="middle">UART0</text>
  <text class="bd-sub" x="104.0" y="454.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="474" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="493.5" text-anchor="middle">UART1</text>
  <text class="bd-sub" x="104.0" y="508.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="16" y="528" width="176" height="44" rx="8"/>
  <text class="bd-title" x="104.0" y="547.5" text-anchor="middle">UART2</text>
  <text class="bd-sub" x="104.0" y="562.5" text-anchor="middle">3 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="868" y="150" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="169.5" text-anchor="middle">I2C0</text>
  <text class="bd-sub" x="956.0" y="184.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="868" y="204" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="223.5" text-anchor="middle">I2C1</text>
  <text class="bd-sub" x="956.0" y="238.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="868" y="258" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="277.5" text-anchor="middle">CSI1/2</text>
  <text class="bd-sub" x="956.0" y="292.5" text-anchor="middle">15 Pin · 1 mm pitch</text>
  <rect class="bd-box bd-box--port" x="868" y="312" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="331.5" text-anchor="middle">CAN</text>
  <text class="bd-sub" x="956.0" y="346.5" text-anchor="middle">4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="868" y="366" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="385.5" text-anchor="middle">SYS-FAN-1/2</text>
  <text class="bd-sub" x="956.0" y="400.5" text-anchor="middle">4 Pin · JST-SH</text>
  <rect class="bd-box bd-box--chip" x="868" y="420" width="176" height="44" rx="8"/>
  <text class="bd-title" x="956.0" y="439.5" text-anchor="middle">BMI270</text>
  <text class="bd-sub" x="956.0" y="454.5" text-anchor="middle">SPI · onboard</text>
  <rect class="bd-box bd-box--hub" x="400" y="150" width="260" height="430" rx="12"/>
  <text class="bd-tag" x="414" y="170">COMPANION COMPUTER</text>
  <text class="bd-title bd-title--hub" x="414" y="190">NVIDIA JETSON</text>
  <text class="bd-sub" x="414" y="210">260-pin DDR4 SODIMM · Nano / Xavier NX</text>
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
  <path class="bd-wire bd-wire--data" d="M300.0 365.0 L400.0 365.0"/>
  <path class="bd-arrow bd-arrow--data" d="M400.0 365.0L392.0 368.5L392.0 361.5Z"/>
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
  <path class="bd-wire bd-wire--data" d="M760.0 365.0 L660.0 365.0"/>
  <path class="bd-arrow bd-arrow--data" d="M660.0 365.0L668.0 361.5L668.0 368.5Z"/>
  <rect class="bd-box bd-box--block" x="410" y="650" width="240" height="60" rx="8"/>
  <text class="bd-title" x="530.0" y="677.5" text-anchor="middle">ETHERNET SWITCH</text>
  <text class="bd-sub" x="530.0" y="692.5" text-anchor="middle">KSZ8795 · 10/100 managed</text>
  <path class="bd-wire bd-wire--data" d="M470.0 580.0 L470.0 650.0"/>
  <path class="bd-arrow bd-arrow--data" d="M470.0 650.0L466.5 642.0L473.5 642.0Z"/>
  <text class="bd-wire-label bd-wire-label--data" x="478.0" y="620.0" text-anchor="start">100 Mbps</text>
  <rect class="bd-box bd-box--port" x="100" y="640" width="176" height="44" rx="8"/>
  <text class="bd-title" x="188.0" y="659.5" text-anchor="middle">ETH-1</text>
  <text class="bd-sub" x="188.0" y="674.5" text-anchor="middle">100 Mbps · 4 Pin · JST-GH</text>
  <rect class="bd-box bd-box--port" x="100" y="706" width="176" height="44" rx="8"/>
  <text class="bd-title" x="188.0" y="725.5" text-anchor="middle">ETH-2</text>
  <text class="bd-sub" x="188.0" y="740.5" text-anchor="middle">100 Mbps · 4 Pin · JST-GH</text>
  <path class="bd-wire bd-wire--data" d="M410.0 662.0 L276.0 662.0"/>
  <path class="bd-wire bd-wire--data" d="M410.0 696.0 L330.0 696.0 L330.0 728.0 L276.0 728.0"/>
  <rect class="bd-box bd-box--link" x="740" y="640" width="230" height="50" rx="8"/>
  <text class="bd-title" x="855.0" y="662.5" text-anchor="middle">JETSON ↔ FMU</text>
  <text class="bd-sub" x="855.0" y="677.5" text-anchor="middle">UART0 ↔ TELEM-3 (USART2)</text>
  <path class="bd-wire bd-wire--data" d="M630.0 580.0 L630.0 620.0 L700.0 620.0 L700.0 665.0 L740.0 665.0"/>
  <path class="bd-arrow bd-arrow--data" d="M740.0 665.0L732.0 668.5L732.0 661.5Z"/>
  <rect class="bd-box bd-box--link" x="740" y="716" width="230" height="50" rx="8"/>
  <text class="bd-title" x="855.0" y="738.5" text-anchor="middle">→ FMU</text>
  <text class="bd-sub" x="855.0" y="753.5" text-anchor="middle">100 Mbps · internal PHY</text>
  <path class="bd-wire bd-wire--data" d="M650.0 690.0 L720.0 690.0 L720.0 741.0 L740.0 741.0"/>
  <path class="bd-arrow bd-arrow--data" d="M740.0 741.0L732.0 744.5L732.0 737.5Z"/>
  <path class="bd-wire bd-wire--data" d="M300 830 H324"/>
  <text class="bd-sub" x="332" y="834">Data / signal</text>
  <rect class="bd-box bd-box--hub" x="450" y="823" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="482" y="834">Unit</text>
  <rect class="bd-box bd-box--chip" x="600" y="823" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="632" y="834">Onboard IC</text>
  <rect class="bd-box bd-box--link" x="750" y="823" width="24" height="14" rx="3"/>
  <text class="bd-sub" x="782" y="834">Inter-unit link</text>
</svg>
</div>
