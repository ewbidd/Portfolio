"use client";

import React from "react";

export default function BatteryReportPage() {
  return (
    <>
  {/* saved from url=(0016)http://localhost */}
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="ReportUtcOffset" content="+7:00" />
  <title>Battery report</title>
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n          letter-spacing: 0.02em;\n      background-color: #181818;\n      color: #F0F0F0;\n      margin-left: 5.5em;\n    }\n\n    h1 {\n      color: #11D8E8;\n      font-size: 42pt;\n    }\n\n    h2 {\n      font-size: 15pt;\n      color: #11EEF4;\n      margin-top: 4em;\n      margin-bottom: 0em;\n      letter-spacing: 0.08em;\n    }\n\n    td {\n      padding-left: 0.3em;\n      padding-right: 0.3em;\n    }\n\n    .nobatts {\n      font-family: Segoe UI Semibold;\n      background: #272727;\n      color: #ACAC60;\n      font-size: 13pt;\n      padding-left: 0.4em;\n      padding-right: 0.4em;\n      padding-top: 0.3em;\n      padding-bottom: 0.3em;\n    }\n\n    .explanation {\n      color: #777777;\n      font-size: 12pt;\n      margin-bottom: 1em;\n    }\n\n    .explanation2 {\n      color: #777777;\n      font-size: 12pt;\n      margin-bottom: 0.1em;\n    }\n\n    table {\n      border-width: 0;\n      table-layout: fixed;\n      font-family: Segoe UI Light;\n      letter-spacing: 0.02em;\n      background-color: #181818;\n      color: #f0f0f0;\n    }\n\n    .even {\n      background: #272727;\n    }\n\n    .odd {\n      background: #1E1E1E;\n    }\n\n    .even.suspend {\n      background: #1A1A28;\n    }\n\n    .odd.suspend {\n      background: #1A1A2C;\n    }\n\n    thead {\n      font-family: Segoe UI Semibold;\n      font-size: 85%;\n      color: #BCBCBC;\n    }\n\n    text {\n      font-size: 12pt;\n      font-family: Segoe UI Light;\n      fill: #11EEF4;\n    }\n\n    .centered {\n      text-align: center;\n    }\n\n    .label {\n      font-family: Segoe UI Semibold;\n      font-size: 85%;\n      color: #BCBCBC;\n    }\n\n    .dc.even {\n      background: #40182C;\n    }\n\n    .dc.odd {\n      background: #30141F;\n    }\n\n    td.colBreak {\n      padding: 0;\n      width: 0.15em;\n    }\n\n    td.state {\n      text-align: center;\n    }\n\n    td.hms {\n      font-family: Segoe UI Symbol;\n      text-align: right;\n      padding-right: 3.4em;\n    }\n\n    td.dateTime {\n      font-family: Segoe UI Symbol;\n    }\n\n    td.nullValue {\n      text-align: center;\n    }\n\n    td.percent {\n      font-family: Segoe UI Symbol;\n      text-align: right;\n      padding-right: 2.5em;\n    }\n\n    col:first-child {\n      width: 13em;\n    }\n\n    col.col2 {\n      width: 10.4em;\n    }\n\n    col.percent {\n      width: 7.5em;\n    }\n\n    td.mw {\n      text-align: right;\n      padding-right: 2.5em;\n    }\n\n    td.acdc {\n      text-align: center;\n    }\n\n    span.date {\n      display: inline-block;\n      width: 5.5em;\n    }\n\n    span.time {\n      text-align: right;\n      width: 4.2em;\n      display: inline-block;\n    }\n\n    text {\n      font-family: Segoe UI Symbol;\n    }\n\n    .noncontigbreak {\n      height: 0.3em;\n      background-color: #1A1A28;\n    }\n  "
    }}
  />
<h1 style={{ justifyContent: "center", display: "flex", alignItems: "center", gap: "1rem", margin: 0 }}>
  why you here lmao.
  <a
    href="/"
    style={{
      color: "#11D8E8",
      textDecoration: "underline",
      fontSize: "inherit", // ikutin ukuran h1
    }}
  >
    go back
  </a>
</h1>

  <h1>Battery report</h1>
  <table style={{ marginBottom: "6em" }}>
    <colgroup>
      <col />
    </colgroup>
    <tbody>
      <tr>
        <td className="label">COMPUTER NAME</td>
        <td>LAPTOP-C8O5FTI0</td>
      </tr>
      <tr>
        <td className="label">SYSTEM PRODUCT NAME</td>
        <td>ASUSTeK COMPUTER INC. ASUS TUF Gaming A15 FA506ICB_FA506ICB</td>
      </tr>
      <tr>
        <td className="label">BIOS</td>
        <td>FA506ICB.307 12/28/2022</td>
      </tr>
      <tr>
        <td className="label">OS BUILD</td>
        <td>26100.1.amd64fre.ge_release.240331-1435</td>
      </tr>
      <tr>
        <td className="label">PLATFORM ROLE</td>
        <td>Mobile</td>
      </tr>
      <tr>
        <td className="label">CONNECTED STANDBY</td>
        <td>Supported</td>
      </tr>
      <tr>
        <td className="label">REPORT TIME</td>
        <td className="dateTime">
          <span className="date">2025-09-22 </span>
          <span className="time">08:50:16</span>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>Installed batteries</h2>
  <div className="explanation">
    Information about each currently installed battery
  </div>
  <table>
    <colgroup>
      <col style={{ width: "15em" }} />
      <col style={{ width: "14em" }} />
    </colgroup>
    <thead>
      <tr>
        <td> </td>
        <td>BATTERY 1</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <span className="label">NAME</span>
        </td>
        <td>A32-K55</td>
      </tr>
      <tr>
        <td>
          <span className="label">MANUFACTURER</span>
        </td>
        <td>ASUS</td>
      </tr>
      <tr>
        <td>
          <span className="label">SERIAL NUMBER</span>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>
          <span className="label">CHEMISTRY</span>
        </td>
        <td>LiON</td>
      </tr>
      <tr>
        <td>
          <span className="label">DESIGN CAPACITY</span>
        </td>
        <td>48.001 mWh</td>
      </tr>
      <tr style={{ height: "0.4em" }} />
      <tr>
        <td>
          <span className="label">FULL CHARGE CAPACITY</span>
        </td>
        <td>32.176 mWh</td>
      </tr>
      <tr>
        <td>
          <span className="label">CYCLE COUNT</span>
        </td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
  <h2>Recent usage</h2>
  <div className="explanation">Power states over the last 7 days</div>
  <table>
    <colgroup>
      <col />
      <col className="col2" />
      <col style={{ width: "4.2em" }} />
      <col className="percent" />
      <col style={{ width: "11em" }} />
    </colgroup>
    <thead>
      <tr>
        <th>START TIME</th>
        <th className="centered">STATE</th>
        <th className="centered">SOURCE</th>
        <th colSpan={2} className="centered">
          CAPACITY REMAINING
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="even  1">
        <td className="dateTime">
          <span className="date">2025-09-15 </span>
          <span className="time">18:43:52</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">78 %</td>
        <td className="mw">25.075 mWh</td>
      </tr>
      <tr className="odd  2">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">18:44:27</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">78 %</td>
        <td className="mw">25.250 mWh</td>
      </tr>
      <tr className="even  3">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">20:22:08</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">80 %</td>
        <td className="mw">25.600 mWh</td>
      </tr>
      <tr className="odd suspend 4">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">20:22:09</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">80 %</td>
        <td className="mw">25.600 mWh</td>
      </tr>
      <tr className="even dc 5">
        <td className="dateTime">
          <span className="date">2025-09-16 </span>
          <span className="time">07:43:42</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">Battery</td>
        <td className="percent">80 %</td>
        <td className="mw">25.705 mWh</td>
      </tr>
      <tr className="odd dc 6">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:44:18</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">79 %</td>
        <td className="mw">25.320 mWh</td>
      </tr>
      <tr className="even dc 7">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:28:13</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">Battery</td>
        <td className="percent">33 %</td>
        <td className="mw">10.651 mWh</td>
      </tr>
      <tr className="odd dc 8">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:31:22</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">33 %</td>
        <td className="mw">10.511 mWh</td>
      </tr>
      <tr className="even  9">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:32:36</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">31 %</td>
        <td className="mw">10.091 mWh</td>
      </tr>
      <tr className="odd dc 10">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:14:43</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">79 %</td>
        <td className="mw">25.565 mWh</td>
      </tr>
      <tr className="even  11">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:19:40</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">73 %</td>
        <td className="mw">23.522 mWh</td>
      </tr>
      <tr className="odd dc 12">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:22:34</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">77 %</td>
        <td className="mw">24.783 mWh</td>
      </tr>
      <tr className="even  13">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:22:39</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">77 %</td>
        <td className="mw">24.759 mWh</td>
      </tr>
      <tr className="odd dc 14">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">13:08:46</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">80 %</td>
        <td className="mw">25.600 mWh</td>
      </tr>
      <tr className="even  15">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">13:08:48</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">79 %</td>
        <td className="mw">25.565 mWh</td>
      </tr>
      <tr className="odd  16">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">15:50:34</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">80 %</td>
        <td className="mw">25.600 mWh</td>
      </tr>
      <tr className="even suspend 17">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">15:50:35</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">80 %</td>
        <td className="mw">25.600 mWh</td>
      </tr>
      <tr className="odd  18">
        <td className="dateTime">
          <span className="date">2025-09-17 </span>
          <span className="time">07:34:48</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">77 %</td>
        <td className="mw">24.701 mWh</td>
      </tr>
      <tr className="even dc 19">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:24</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">Battery</td>
        <td className="percent">76 %</td>
        <td className="mw">24.491 mWh</td>
      </tr>
      <tr className="odd dc 20">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:25</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">76 %</td>
        <td className="mw">24.491 mWh</td>
      </tr>
      <tr className="even dc 21">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:26</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">Battery</td>
        <td className="percent">76 %</td>
        <td className="mw">24.421 mWh</td>
      </tr>
      <tr className="odd dc 22">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:26</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">76 %</td>
        <td className="mw">24.421 mWh</td>
      </tr>
      <tr className="even  23">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:08:07</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">27 %</td>
        <td className="mw">8.631 mWh</td>
      </tr>
      <tr className="odd suspend 24">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">15:45:00</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">82 %</td>
        <td className="mw">26.511 mWh</td>
      </tr>
      <tr className="even  25">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">17:59:01</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.698 mWh</td>
      </tr>
      <tr className="odd  26">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">19:59:54</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.698 mWh</td>
      </tr>
      <tr className="even suspend 27">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">19:59:54</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">83 %</td>
        <td className="mw">26.698 mWh</td>
      </tr>
      <tr className="odd dc 28">
        <td className="dateTime">
          <span className="date">2025-09-18 </span>
          <span className="time">07:29:28</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">Battery</td>
        <td className="percent">83 %</td>
        <td className="mw">26.640 mWh</td>
      </tr>
      <tr className="even dc 29">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:30:03</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">82 %</td>
        <td className="mw">26.231 mWh</td>
      </tr>
      <tr className="odd  30">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:22:59</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">12 %</td>
        <td className="mw">3.959 mWh</td>
      </tr>
      <tr className="even  31">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">16:32:47</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">80 %</td>
        <td className="mw">25.659 mWh</td>
      </tr>
      <tr className="odd suspend 32">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">16:32:47</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">80 %</td>
        <td className="mw">25.659 mWh</td>
      </tr>
      <tr className="even dc 33">
        <td className="dateTime">
          <span className="date">2025-09-19 </span>
          <span className="time">08:42:08</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">Battery</td>
        <td className="percent">76 %</td>
        <td className="mw">24.444 mWh</td>
      </tr>
      <tr className="odd dc 34">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:42:47</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">75 %</td>
        <td className="mw">24.070 mWh</td>
      </tr>
      <tr className="even  35">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">09:13:54</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">29 %</td>
        <td className="mw">9.355 mWh</td>
      </tr>
      <tr className="odd dc 36">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">09:14:01</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">Battery</td>
        <td className="percent">29 %</td>
        <td className="mw">9.425 mWh</td>
      </tr>
      <tr className="even  37">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">09:14:15</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">29 %</td>
        <td className="mw">9.332 mWh</td>
      </tr>
      <tr className="odd  38">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">16:15:29</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">81 %</td>
        <td className="mw">26.091 mWh</td>
      </tr>
      <tr className="even suspend 39">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">16:15:29</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">81 %</td>
        <td className="mw">26.091 mWh</td>
      </tr>
      <tr className="odd  40">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">17:40:18</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">81 %</td>
        <td className="mw">26.173 mWh</td>
      </tr>
      <tr className="even  41">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">17:40:53</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">81 %</td>
        <td className="mw">26.173 mWh</td>
      </tr>
      <tr className="odd  42">
        <td className="dateTime">
          <span className="date">2025-09-20 </span>
          <span className="time">00:08:03</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.570 mWh</td>
      </tr>
      <tr className="even suspend 43">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">00:08:03</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">83 %</td>
        <td className="mw">26.570 mWh</td>
      </tr>
      <tr className="odd  44">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">18:20:52</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.605 mWh</td>
      </tr>
      <tr className="even  45">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">18:21:27</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.605 mWh</td>
      </tr>
      <tr className="odd suspend 46">
        <td className="dateTime">
          <span className="date">2025-09-21 </span>
          <span className="time">00:26:00</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">84 %</td>
        <td className="mw">26.862 mWh</td>
      </tr>
      <tr className="even  47">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">00:29:58</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">84 %</td>
        <td className="mw">26.990 mWh</td>
      </tr>
      <tr className="odd  48">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">00:30:16</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">84 %</td>
        <td className="mw">26.990 mWh</td>
      </tr>
      <tr className="even suspend 49">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">00:30:17</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">84 %</td>
        <td className="mw">26.990 mWh</td>
      </tr>
      <tr className="odd  50">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:53:15</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.757 mWh</td>
      </tr>
      <tr className="even  51">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:53:50</span>
        </td>
        <td className="state">Active</td>
        <td className="acdc">AC</td>
        <td className="percent">83 %</td>
        <td className="mw">26.757 mWh</td>
      </tr>
      <tr className="odd  52">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">21:03:19</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="acdc">AC</td>
        <td className="percent">84 %</td>
        <td className="mw">26.967 mWh</td>
      </tr>
      <tr className="even suspend 53">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">21:03:30</span>
        </td>
        <td className="state">Suspended</td>
        <td className="acdc" />
        <td className="percent">84 %</td>
        <td className="mw">26.967 mWh</td>
      </tr>
      <tr className="odd  54">
        <td className="dateTime">
          <span className="date">2025-09-22 </span>
          <span className="time">08:50:15</span>
        </td>
        <td className="state">Report generated</td>
        <td className="acdc">AC</td>
        <td className="percent">84 %</td>
        <td className="mw">26.967 mWh</td>
      </tr>
    </tbody>
  </table>
  <h2>Battery usage</h2>
  <div className="explanation">Battery drains over the last 7 days</div>
  <canvas id="drain-graph" width={864} height={400} />
  <table>
    <colgroup>
      <col />
      <col className="col2" />
      <col style={{ width: "10em" }} />
      <col className="percent" />
      <col style={{ width: "11em" }} />
    </colgroup>
    <thead>
      <tr>
        <th>START TIME</th>
        <th className="centered">STATE</th>
        <th className="centered">DURATION</th>
        <th className="centered" colSpan={2}>
          ENERGY DRAINED
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="even dc 1">
        <td className="dateTime">
          <span className="date">2025-09-16 </span>
          <span className="time">07:43:42</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="hms">0:00:35</td>
        <td className="percent">1 %</td>
        <td className="mw">385 mWh</td>
      </tr>
      <tr className="odd dc 2">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:44:18</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:43:55</td>
        <td className="percent">46 %</td>
        <td className="mw">14.669 mWh</td>
      </tr>
      <tr className="even dc 3">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:28:13</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="hms">0:03:09</td>
        <td className="nullValue">-</td>
        <td className="mw">140 mWh</td>
      </tr>
      <tr className="odd dc 4">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:31:22</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:01:13</td>
        <td className="percent">1 %</td>
        <td className="mw">420 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="even dc 5">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:14:43</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:04:56</td>
        <td className="percent">6 %</td>
        <td className="mw">2.043 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="odd dc 6">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">11:22:34</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:00:04</td>
        <td className="nullValue">-</td>
        <td className="mw">24 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="even dc 7">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">13:08:46</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:00:01</td>
        <td className="nullValue">-</td>
        <td className="mw">35 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="odd dc 8">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:24</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="hms">0:00:01</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even dc 9">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:25</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:00:00</td>
        <td className="nullValue">-</td>
        <td className="mw">70 mWh</td>
      </tr>
      <tr className="odd dc 10">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:26</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="hms">0:00:00</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even dc 11">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:35:26</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:32:40</td>
        <td className="percent">49 %</td>
        <td className="mw">15.790 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="odd dc 12">
        <td className="dateTime">
          <span className="date">2025-09-18 </span>
          <span className="time">07:29:28</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="hms">0:00:35</td>
        <td className="percent">1 %</td>
        <td className="mw">409 mWh</td>
      </tr>
      <tr className="even dc 13">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">07:30:03</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:52:56</td>
        <td className="percent">69 %</td>
        <td className="mw">22.272 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="odd dc 14">
        <td className="dateTime">
          <span className="date">2025-09-19 </span>
          <span className="time">08:42:08</span>
        </td>
        <td className="state">Connected standby</td>
        <td className="hms">0:00:39</td>
        <td className="percent">1 %</td>
        <td className="mw">374 mWh</td>
      </tr>
      <tr className="even dc 15">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">08:42:47</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:31:06</td>
        <td className="percent">46 %</td>
        <td className="mw">14.715 mWh</td>
      </tr>
      <tr className="noncontigbreak">
        <td colSpan={5}> </td>
      </tr>
      <tr className="odd dc 16">
        <td className="dateTime">
          <span className="date"> </span>
          <span className="time">09:14:01</span>
        </td>
        <td className="state">Active</td>
        <td className="hms">0:00:13</td>
        <td className="nullValue">-</td>
        <td className="mw">93 mWh</td>
      </tr>
    </tbody>
  </table>
  <h2>Usage history</h2>
  <div className="explanation2">History of system usage on AC and battery</div>
  <table>
    <colgroup>
      <col />
      <col className="col2" />
      <col style={{ width: "10em" }} />
      <col style={{}} />
      <col style={{ width: "10em" }} />
      <col style={{ width: "10em" }} />
      <col style={{}} />
    </colgroup>
    <thead>
      <tr>
        <td> </td>
        <td colSpan={2} className="centered">
          BATTERY DURATION
        </td>
        <td className="colBreak"> </td>
        <td colSpan={3} className="centered">
          AC DURATION
        </td>
      </tr>
      <tr>
        <td>PERIOD</td>
        <td className="centered">ACTIVE</td>
        <td className="centered">CONNECTED STANDBY</td>
        <td className="colBreak"> </td>
        <td className="centered">ACTIVE</td>
        <td className="centered">CONNECTED STANDBY</td>
      </tr>
    </thead>
    <tbody>
      <tr className="even  1">
        <td className="dateTime">2024-12-09 - 2024-12-16</td>
        <td className="hms">2:44:02</td>
        <td className="hms">8:47:54</td>
        <td className="colBreak"> </td>
        <td className="hms">39:05:09</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="odd  2">
        <td className="dateTime">2024-12-16 - 2024-12-23</td>
        <td className="hms">2:03:18</td>
        <td className="hms">0:56:10</td>
        <td className="colBreak"> </td>
        <td className="hms">51:05:21</td>
        <td className="hms">0:58:27</td>
      </tr>
      <tr className="even  3">
        <td className="dateTime">2024-12-23 - 2024-12-31</td>
        <td className="hms">0:23:52</td>
        <td className="hms">0:06:57</td>
        <td className="colBreak"> </td>
        <td className="hms">46:29:13</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="odd  4">
        <td className="dateTime">2024-12-31 - 2025-01-06</td>
        <td className="hms">0:41:42</td>
        <td className="hms">0:05:38</td>
        <td className="colBreak"> </td>
        <td className="hms">68:53:41</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  5">
        <td className="dateTime">2025-01-06 - 2025-01-20</td>
        <td className="hms">1:34:19</td>
        <td className="hms">0:13:09</td>
        <td className="colBreak"> </td>
        <td className="hms">68:38:41</td>
        <td className="hms">0:00:05</td>
      </tr>
      <tr className="odd  6">
        <td className="dateTime">2025-01-20 - 2025-01-27</td>
        <td className="hms">17:25:53</td>
        <td className="hms">0:07:19</td>
        <td className="colBreak"> </td>
        <td className="hms">53:46:26</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  7">
        <td className="dateTime">2025-01-27 - 2025-02-03</td>
        <td className="hms">27:37:50</td>
        <td className="hms">10:50:08</td>
        <td className="colBreak"> </td>
        <td className="hms">384:33:13</td>
        <td className="hms">3:24:53</td>
      </tr>
      <tr className="odd  8">
        <td className="dateTime">2025-02-03 - 2025-02-10</td>
        <td className="hms">7:09:46</td>
        <td className="hms">0:44:45</td>
        <td className="colBreak"> </td>
        <td className="hms">31:11:53</td>
        <td className="hms">0:28:52</td>
      </tr>
      <tr className="even  9">
        <td className="dateTime">2025-02-10 - 2025-02-17</td>
        <td className="hms">18:18:56</td>
        <td className="hms">2:12:35</td>
        <td className="colBreak"> </td>
        <td className="hms">66:02:47</td>
        <td className="hms">6:45:39</td>
      </tr>
      <tr className="odd  10">
        <td className="dateTime">2025-02-17 - 2025-02-24</td>
        <td className="hms">11:11:33</td>
        <td className="hms">2:18:32</td>
        <td className="colBreak"> </td>
        <td className="hms">46:38:27</td>
        <td className="hms">1:26:11</td>
      </tr>
      <tr className="even  11">
        <td className="dateTime">2025-02-24 - 2025-03-03</td>
        <td className="hms">10:22:36</td>
        <td className="hms">1:26:22</td>
        <td className="colBreak"> </td>
        <td className="hms">57:33:11</td>
        <td className="hms">0:01:48</td>
      </tr>
      <tr className="odd  12">
        <td className="dateTime">2025-03-03 - 2025-03-10</td>
        <td className="hms">19:26:07</td>
        <td className="hms">3:53:39</td>
        <td className="colBreak"> </td>
        <td className="hms">106:13:32</td>
        <td className="hms">0:01:48</td>
      </tr>
      <tr className="even  13">
        <td className="dateTime">2025-03-10 - 2025-03-24</td>
        <td className="hms">17:59:18</td>
        <td className="hms">2:21:15</td>
        <td className="colBreak"> </td>
        <td className="hms">83:27:04</td>
        <td className="hms">0:59:38</td>
      </tr>
      <tr className="odd  14">
        <td className="dateTime">2025-03-24 - 2025-03-31</td>
        <td className="hms">19:10:05</td>
        <td className="hms">2:56:59</td>
        <td className="colBreak"> </td>
        <td className="hms">129:52:44</td>
        <td className="hms">1:07:40</td>
      </tr>
      <tr className="even  15">
        <td className="dateTime">2025-03-31 - 2025-04-07</td>
        <td className="hms">19:50:16</td>
        <td className="hms">3:10:39</td>
        <td className="colBreak"> </td>
        <td className="hms">194:32:26</td>
        <td className="hms">1:07:40</td>
      </tr>
      <tr className="odd  16">
        <td className="dateTime">2025-04-07 - 2025-04-14</td>
        <td className="hms">1:09:44</td>
        <td className="hms">0:06:05</td>
        <td className="colBreak"> </td>
        <td className="hms">65:32:12</td>
        <td className="hms">1:08:26</td>
      </tr>
      <tr className="even  17">
        <td className="dateTime">2025-04-14 - 2025-04-28</td>
        <td className="hms">17:24:35</td>
        <td className="hms">14:18:33</td>
        <td className="colBreak"> </td>
        <td className="hms">92:38:59</td>
        <td className="hms">2:09:44</td>
      </tr>
      <tr className="odd  18">
        <td className="dateTime">2025-04-28 - 2025-05-05</td>
        <td className="hms">6:11:26</td>
        <td className="hms">1:28:16</td>
        <td className="colBreak"> </td>
        <td className="hms">71:17:58</td>
        <td className="hms">0:05:23</td>
      </tr>
      <tr className="even  19">
        <td className="dateTime">2025-05-05 - 2025-05-12</td>
        <td className="hms">6:02:28</td>
        <td className="hms">1:14:27</td>
        <td className="colBreak"> </td>
        <td className="hms">60:11:56</td>
        <td className="hms">1:21:45</td>
      </tr>
      <tr className="odd  20">
        <td className="dateTime">2025-05-12 - 2025-05-19</td>
        <td className="hms">8:25:55</td>
        <td className="hms">6:39:18</td>
        <td className="colBreak"> </td>
        <td className="hms">63:36:10</td>
        <td className="hms">2:40:49</td>
      </tr>
      <tr className="even  21">
        <td className="dateTime">2025-05-19 - 2025-05-26</td>
        <td className="hms">12:46:59</td>
        <td className="hms">7:41:32</td>
        <td className="colBreak"> </td>
        <td className="hms">111:56:37</td>
        <td className="hms">2:43:46</td>
      </tr>
      <tr className="odd  22">
        <td className="dateTime">2025-05-26 - 2025-06-02</td>
        <td className="hms">6:03:24</td>
        <td className="hms">0:57:31</td>
        <td className="colBreak"> </td>
        <td className="hms">57:22:11</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  23">
        <td className="dateTime">2025-06-02 - 2025-06-09</td>
        <td className="hms">3:50:09</td>
        <td className="hms">0:21:20</td>
        <td className="colBreak"> </td>
        <td className="hms">51:43:03</td>
        <td className="hms">1:37:04</td>
      </tr>
      <tr className="odd  24">
        <td className="dateTime">2025-06-09 - 2025-06-16</td>
        <td className="hms">25:57:35</td>
        <td className="hms">13:29:28</td>
        <td className="colBreak"> </td>
        <td className="hms">255:21:31</td>
        <td className="hms">5:04:17</td>
      </tr>
      <tr className="even  25">
        <td className="dateTime">2025-06-16 - 2025-06-23</td>
        <td className="hms">1:25:45</td>
        <td className="hms">0:56:16</td>
        <td className="colBreak"> </td>
        <td className="hms">44:53:00</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="odd  26">
        <td className="dateTime">2025-06-23 - 2025-07-07</td>
        <td className="hms">1:22:38</td>
        <td className="hms">0:12:37</td>
        <td className="colBreak"> </td>
        <td className="hms">114:09:04</td>
        <td className="hms">0:41:23</td>
      </tr>
      <tr className="even  27">
        <td className="dateTime">2025-07-07 - 2025-07-14</td>
        <td className="hms">0:47:37</td>
        <td className="hms">0:12:56</td>
        <td className="colBreak"> </td>
        <td className="hms">54:42:22</td>
        <td className="hms">0:02:59</td>
      </tr>
      <tr className="odd  28">
        <td className="dateTime">2025-07-14 - 2025-07-21</td>
        <td className="hms">2:26:07</td>
        <td className="hms">0:41:19</td>
        <td className="colBreak"> </td>
        <td className="hms">108:20:06</td>
        <td className="hms">0:07:10</td>
      </tr>
      <tr className="even  29">
        <td className="dateTime">2025-07-21 - 2025-07-28</td>
        <td className="hms">0:36:07</td>
        <td className="hms">0:08:39</td>
        <td className="colBreak"> </td>
        <td className="hms">19:17:59</td>
        <td className="hms">0:02:20</td>
      </tr>
      <tr className="odd  30">
        <td className="dateTime">2025-07-28 - 2025-08-04</td>
        <td className="hms">0:01:27</td>
        <td className="hms">0:00:35</td>
        <td className="colBreak"> </td>
        <td className="hms">21:31:01</td>
        <td className="hms">0:03:35</td>
      </tr>
      <tr className="even  31">
        <td className="dateTime">2025-08-04 - 2025-08-11</td>
        <td className="hms">0:02:49</td>
        <td className="hms">1:50:33</td>
        <td className="colBreak"> </td>
        <td className="hms">28:13:03</td>
        <td className="hms">0:04:44</td>
      </tr>
      <tr className="odd  32">
        <td className="dateTime">2025-08-11 - 2025-08-18</td>
        <td className="hms">0:35:39</td>
        <td className="hms">6:16:21</td>
        <td className="colBreak"> </td>
        <td className="hms">38:00:44</td>
        <td className="hms">0:04:15</td>
      </tr>
      <tr className="even  33">
        <td className="dateTime">2025-08-18 - 2025-08-25</td>
        <td className="hms">0:49:57</td>
        <td className="hms">0:01:10</td>
        <td className="colBreak"> </td>
        <td className="hms">53:55:04</td>
        <td className="hms">0:06:25</td>
      </tr>
      <tr className="odd  34">
        <td className="dateTime">2025-08-25 - 2025-09-01</td>
        <td className="hms">0:08:21</td>
        <td className="hms">0:00:35</td>
        <td className="colBreak"> </td>
        <td className="hms">39:48:33</td>
        <td className="hms">0:06:29</td>
      </tr>
      <tr className="even  35">
        <td className="dateTime">2025-09-01 - 2025-09-08</td>
        <td className="hms">4:20:39</td>
        <td className="hms">0:01:12</td>
        <td className="colBreak"> </td>
        <td className="hms">55:35:08</td>
        <td className="hms">0:05:53</td>
      </tr>
      <tr className="odd  36">
        <td className="dateTime">2025-09-08</td>
        <td className="hms">0:38:03</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">7:21:28</td>
        <td className="hms">0:00:35</td>
      </tr>
      <tr className="even  37">
        <td className="dateTime">2025-09-09</td>
        <td className="hms">0:23:35</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">7:11:45</td>
        <td className="hms">0:00:35</td>
      </tr>
      <tr className="odd  38">
        <td className="dateTime">2025-09-10</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">6:56:21</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  39">
        <td className="dateTime">2025-09-11</td>
        <td className="hms">0:13:50</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">8:05:16</td>
        <td className="hms">0:01:10</td>
      </tr>
      <tr className="odd  40">
        <td className="dateTime">2025-09-12</td>
        <td className="hms">0:42:42</td>
        <td className="hms">0:01:58</td>
        <td className="colBreak"> </td>
        <td className="hms">8:54:27</td>
        <td className="hms">0:00:36</td>
      </tr>
      <tr className="even  41">
        <td className="dateTime">2025-09-13</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">4:14:07</td>
        <td className="hms">0:01:10</td>
      </tr>
      <tr className="odd  42">
        <td className="dateTime">2025-09-14</td>
        <td className="hms">0:00:01</td>
        <td className="hms">0:00:35</td>
        <td className="colBreak"> </td>
        <td className="hms">1:56:28</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  43">
        <td className="dateTime">2025-09-15</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">1:37:39</td>
        <td className="hms">0:00:35</td>
      </tr>
      <tr className="odd  44">
        <td className="dateTime">2025-09-16</td>
        <td className="hms">0:50:09</td>
        <td className="hms">0:03:44</td>
        <td className="colBreak"> </td>
        <td className="hms">7:12:44</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  45">
        <td className="dateTime">2025-09-17</td>
        <td className="hms">0:32:40</td>
        <td className="hms">0:00:01</td>
        <td className="colBreak"> </td>
        <td className="hms">9:37:35</td>
        <td className="hms">0:00:35</td>
      </tr>
      <tr className="odd  46">
        <td className="dateTime">2025-09-18</td>
        <td className="hms">0:52:56</td>
        <td className="hms">0:00:34</td>
        <td className="colBreak"> </td>
        <td className="hms">8:09:39</td>
        <td className="nullValue">-</td>
      </tr>
      <tr className="even  47">
        <td className="dateTime">2025-09-19</td>
        <td className="hms">0:31:19</td>
        <td className="hms">0:00:39</td>
        <td className="colBreak"> </td>
        <td className="hms">13:20:13</td>
        <td className="hms">0:00:35</td>
      </tr>
      <tr className="odd  48">
        <td className="dateTime">2025-09-20</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">5:46:31</td>
        <td className="hms">0:00:35</td>
      </tr>
      <tr className="even  49">
        <td className="dateTime">2025-09-21</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">9:35:40</td>
        <td className="hms">0:00:45</td>
      </tr>
    </tbody>
  </table>
  <h2>Battery capacity history</h2>
  <div className="explanation">
    Charge capacity history of the systems batteries
  </div>
  <table>
    <colgroup>
      <col />
      <col className="col2" />
      <col style={{ width: "10em" }} />
    </colgroup>
    <thead>
      <tr>
        <td>
          <span>PERIOD</span>
        </td>
        <td className="centered">FULL CHARGE CAPACITY</td>
        <td className="centered">DESIGN CAPACITY</td>
      </tr>
    </thead>
    <tbody>
      <tr className="even  1">
        <td className="dateTime">2024-12-09 - 2024-12-16</td>
        <td className="mw">37.416 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  2">
        <td className="dateTime">2024-12-16 - 2024-12-23</td>
        <td className="mw">36.510 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  3">
        <td className="dateTime">2024-12-23 - 2024-12-31</td>
        <td className="mw">34.990 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  4">
        <td className="dateTime">2024-12-31 - 2025-01-06</td>
        <td className="mw">34.990 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  5">
        <td className="dateTime">2025-01-06 - 2025-01-20</td>
        <td className="mw">35.143 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  6">
        <td className="dateTime">2025-01-20 - 2025-01-27</td>
        <td className="mw">35.288 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  7">
        <td className="dateTime">2025-01-27 - 2025-02-03</td>
        <td className="mw">35.657 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  8">
        <td className="dateTime">2025-02-03 - 2025-02-10</td>
        <td className="mw">35.004 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  9">
        <td className="dateTime">2025-02-10 - 2025-02-17</td>
        <td className="mw">34.973 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  10">
        <td className="dateTime">2025-02-17 - 2025-02-24</td>
        <td className="mw">34.597 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  11">
        <td className="dateTime">2025-02-24 - 2025-03-03</td>
        <td className="mw">34.053 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  12">
        <td className="dateTime">2025-03-03 - 2025-03-10</td>
        <td className="mw">33.972 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  13">
        <td className="dateTime">2025-03-10 - 2025-03-24</td>
        <td className="mw">33.597 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  14">
        <td className="dateTime">2025-03-24 - 2025-03-31</td>
        <td className="mw">33.551 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  15">
        <td className="dateTime">2025-03-31 - 2025-04-07</td>
        <td className="mw">33.527 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  16">
        <td className="mw">33.460 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  17">
        <td className="dateTime">2025-04-14 - 2025-04-28</td>
        <td className="mw">33.827 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  18">
        <td className="dateTime">2025-04-28 - 2025-05-05</td>
        <td className="mw">32.563 mWh</td>
        <td className="mw">48.001 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  19">
        <td className="dateTime">2025-05-05 - 2025-05-12</td>
        <td className="mw">34.039 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  20">
        <td className="dateTime">2025-05-12 - 2025-05-19</td>
        <td className="mw">33.976 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  21">
        <td className="dateTime">2025-05-19 - 2025-05-26</td>
        <td className="mw">33.837 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  22">
        <td className="dateTime">2025-05-26 - 2025-06-02</td>
        <td className="mw">33.659 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  23">
        <td className="dateTime">2025-06-02 - 2025-06-09</td>
        <td className="mw">33.567 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  24">
        <td className="dateTime">2025-06-09 - 2025-06-16</td>
        <td className="mw">33.715 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  25">
        <td className="dateTime">2025-06-16 - 2025-06-23</td>
        <td className="mw">33.842 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  26">
        <td className="dateTime">2025-06-23 - 2025-07-07</td>
        <td className="mw">33.814 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  27">
        <td className="dateTime">2025-07-07 - 2025-07-14</td>
        <td className="mw">33.667 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  28">
        <td className="dateTime">2025-07-14 - 2025-07-21</td>
        <td className="mw">33.479 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  29">
        <td className="dateTime">2025-07-21 - 2025-07-28</td>
        <td className="mw">31.954 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  30">
        <td className="dateTime">2025-07-28 - 2025-08-04</td>
        <td className="mw">32.007 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  31">
        <td className="dateTime">2025-08-04 - 2025-08-11</td>
        <td className="mw">32.012 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  32">
        <td className="dateTime">2025-08-11 - 2025-08-18</td>
        <td className="mw">32.012 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  33">
        <td className="dateTime">2025-08-18 - 2025-08-25</td>
        <td className="mw">32.002 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  34">
        <td className="dateTime">2025-08-25 - 2025-09-01</td>
        <td className="mw">32.281 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  35">
        <td className="dateTime">2025-09-01 - 2025-09-08</td>
        <td className="mw">32.397 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  36">
        <td className="dateTime">2025-09-08</td>
        <td className="mw">32.444 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  37">
        <td className="dateTime">2025-09-09</td>
        <td className="mw">32.400 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  38">
        <td className="dateTime">2025-09-10</td>
        <td className="mw">32.346 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  39">
        <td className="dateTime">2025-09-11</td>
        <td className="mw">32.240 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  40">
        <td className="dateTime">2025-09-12</td>
        <td className="mw">32.187 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  41">
        <td className="dateTime">2025-09-13</td>
        <td className="mw">32.187 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  42">
        <td className="dateTime">2025-09-14</td>
        <td className="mw">32.187 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  43">
        <td className="dateTime">2025-09-15</td>
        <td className="mw">32.187 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  44">
        <td className="dateTime">2025-09-16</td>
        <td className="mw">32.187 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  45">
        <td className="dateTime">2025-09-17</td>
        <td className="mw">32.179 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  46">
        <td className="dateTime">2025-09-18</td>
        <td className="mw">32.176 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  47">
        <td className="dateTime">2025-09-19</td>
        <td className="mw">32.147 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="odd  48">
        <td className="dateTime">2025-09-20</td>
        <td className="mw">32.129 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
      <tr className="even  49">
        <td className="dateTime">2025-09-21</td>
        <td className="mw">32.129 mWh</td>
        <td className="mw">48.001 mWh</td>
      </tr>
    </tbody>
  </table>
  <h2>Battery life estimates</h2>
  <div className="explanation2">
    Battery life estimates based on observed drains
  </div>
  <table>
    <colgroup>
      <col />
      <col className="col2" />
      <col style={{ width: "10em" }} />
      <col style={{}} />
      <col style={{ width: "10em" }} />
      <col style={{ width: "10em" }} />
      <col style={{ width: "10em" }} />
    </colgroup>
    <thead>
      <tr className="rowHeader">
        <td> </td>
        <td colSpan={2} className="centered">
          AT FULL CHARGE
        </td>
        <td className="colBreak"> </td>
        <td colSpan={2} className="centered">
          AT DESIGN CAPACITY
        </td>
      </tr>
      <tr className="rowHeader">
        <td>PERIOD</td>
        <td className="centered">
          <span>ACTIVE</span>
        </td>
        <td className="centered">
          <span>CONNECTED STANDBY</span>
        </td>
        <td className="colBreak"> </td>
        <td className="centered">
          <span>ACTIVE</span>
        </td>
        <td className="centered">
          <span>CONNECTED STANDBY</span>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr style={{ verticalAlign: "top" }} className="even  1">
        <td className="dateTime">2024-12-09 - 2024-12-16</td>
        <td className="hms">2:12:06</td>
        <td className="hms">
          <div style={{ height: "1em" }}>30:06:57</div>
          <span style={{ fontSize: "9pt" }}>53 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:49:28</td>
        <td className="hms">
          <div style={{ height: "1em" }}>38:38:09</div>
          <span style={{ fontSize: "9pt" }}>41 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  2">
        <td className="dateTime">2024-12-16 - 2024-12-23</td>
        <td className="hms">2:26:46</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:44:52</div>
          <span style={{ fontSize: "9pt" }}>278 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:12:58</td>
        <td className="hms">
          <div style={{ height: "1em" }}>7:33:25</div>
          <span style={{ fontSize: "9pt" }}>212 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  3">
        <td className="dateTime">2024-12-23 - 2024-12-31</td>
        <td className="hms">2:01:11</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:44:43</div>
          <span style={{ fontSize: "9pt" }}>917 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:46:14</td>
        <td className="hms">
          <div style={{ height: "1em" }}>2:23:40</div>
          <span style={{ fontSize: "9pt" }}>668 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  4">
        <td className="dateTime">2024-12-31 - 2025-01-06</td>
        <td className="hms">2:00:14</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:23:56</div>
          <span style={{ fontSize: "9pt" }}>1144 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:44:57</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:55:09</div>
          <span style={{ fontSize: "9pt" }}>834 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  5">
        <td className="dateTime">2025-01-06 - 2025-01-20</td>
        <td className="hms">1:36:56</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:27:06</div>
          <span style={{ fontSize: "9pt" }}>1102 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:12:24</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:58:59</div>
          <span style={{ fontSize: "9pt" }}>807 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  6">
        <td className="dateTime">2025-01-20 - 2025-01-27</td>
        <td className="hms">39:15:43</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:20:24</div>
          <span style={{ fontSize: "9pt" }}>1194 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">53:24:24</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:49:22</div>
          <span style={{ fontSize: "9pt" }}>878 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  7">
        <td className="dateTime">2025-01-27 - 2025-02-03</td>
        <td className="hms">5:18:39</td>
        <td className="hms">
          <div style={{ height: "1em" }}>10:08:31</div>
          <span style={{ fontSize: "9pt" }}>158 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">7:08:58</td>
        <td className="hms">
          <div style={{ height: "1em" }}>13:39:11</div>
          <span style={{ fontSize: "9pt" }}>117 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  8">
        <td className="dateTime">2025-02-03 - 2025-02-10</td>
        <td className="hms">2:45:40</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:12:02</div>
          <span style={{ fontSize: "9pt" }}>381 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:47:11</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:45:37</div>
          <span style={{ fontSize: "9pt" }}>278 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  9">
        <td className="dateTime">2025-02-10 - 2025-02-17</td>
        <td className="hms">2:50:44</td>
        <td className="hms">
          <div style={{ height: "1em" }}>6:25:18</div>
          <span style={{ fontSize: "9pt" }}>249 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:54:20</td>
        <td className="hms">
          <div style={{ height: "1em" }}>8:48:50</div>
          <span style={{ fontSize: "9pt" }}>182 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  10">
        <td className="dateTime">2025-02-17 - 2025-02-24</td>
        <td className="hms">2:49:16</td>
        <td className="hms">
          <div style={{ height: "1em" }}>18:59:31</div>
          <span style={{ fontSize: "9pt" }}>84 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:54:51</td>
        <td className="hms">
          <div style={{ height: "1em" }}>26:21:00</div>
          <span style={{ fontSize: "9pt" }}>61 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  11">
        <td className="dateTime">2025-02-24 - 2025-03-03</td>
        <td className="hms">2:28:14</td>
        <td className="hms">
          <div style={{ height: "1em" }}>7:15:42</div>
          <span style={{ fontSize: "9pt" }}>220 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:28:58</td>
        <td className="hms">
          <div style={{ height: "1em" }}>10:14:10</div>
          <span style={{ fontSize: "9pt" }}>156 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  12">
        <td className="dateTime">2025-03-03 - 2025-03-10</td>
        <td className="hms">2:31:29</td>
        <td className="hms">
          <div style={{ height: "1em" }}>8:08:31</div>
          <span style={{ fontSize: "9pt" }}>197 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:34:02</td>
        <td className="hms">
          <div style={{ height: "1em" }}>11:30:15</div>
          <span style={{ fontSize: "9pt" }}>139 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  13">
        <td className="dateTime">2025-03-10 - 2025-03-24</td>
        <td className="hms">2:41:59</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:31:43</div>
          <span style={{ fontSize: "9pt" }}>289 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:51:26</td>
        <td className="hms">
          <div style={{ height: "1em" }}>7:53:56</div>
          <span style={{ fontSize: "9pt" }}>203 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  14">
        <td className="dateTime">2025-03-24 - 2025-03-31</td>
        <td className="hms">2:34:08</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:50:52</div>
          <span style={{ fontSize: "9pt" }}>330 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:40:31</td>
        <td className="hms">
          <div style={{ height: "1em" }}>6:56:09</div>
          <span style={{ fontSize: "9pt" }}>231 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  15">
        <td className="dateTime">2025-03-31 - 2025-04-07</td>
        <td className="hms">2:28:21</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:16:40</div>
          <span style={{ fontSize: "9pt" }}>374 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:32:24</td>
        <td className="hms">
          <div style={{ height: "1em" }}>6:07:29</div>
          <span style={{ fontSize: "9pt" }}>261 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  16">
        <td className="dateTime">2025-04-07 - 2025-04-14</td>
        <td className="hms">1:19:27</td>
        <td className="hms">
          <div style={{ height: "1em" }}>0:52:21</div>
          <span style={{ fontSize: "9pt" }}>1834 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:53:58</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:15:06</div>
          <span style={{ fontSize: "9pt" }}>1278 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  17">
        <td className="dateTime">2025-04-14 - 2025-04-28</td>
        <td className="hms">2:23:56</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">3:24:15</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  18">
        <td className="dateTime">2025-04-28 - 2025-05-05</td>
        <td className="hms">2:29:49</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:14:54</div>
          <span style={{ fontSize: "9pt" }}>305 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:40:50</td>
        <td className="hms">
          <div style={{ height: "1em" }}>7:44:12</div>
          <span style={{ fontSize: "9pt" }}>207 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  19">
        <td className="dateTime">2025-05-05 - 2025-05-12</td>
        <td className="hms">2:06:53</td>
        <td className="hms">
          <div style={{ height: "1em" }}>6:04:00</div>
          <span style={{ fontSize: "9pt" }}>264 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:58:56</td>
        <td className="hms">
          <div style={{ height: "1em" }}>8:33:18</div>
          <span style={{ fontSize: "9pt" }}>187 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  20">
        <td className="dateTime">2025-05-12 - 2025-05-19</td>
        <td className="hms">2:07:58</td>
        <td className="hms">
          <div style={{ height: "1em" }}>24:45:46</div>
          <span style={{ fontSize: "9pt" }}>65 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:00:47</td>
        <td className="hms">
          <div style={{ height: "1em" }}>34:59:05</div>
          <span style={{ fontSize: "9pt" }}>46 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  21">
        <td className="dateTime">2025-05-19 - 2025-05-26</td>
        <td className="hms">2:01:39</td>
        <td className="hms">
          <div style={{ height: "1em" }}>15:45:16</div>
          <span style={{ fontSize: "9pt" }}>102 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:52:35</td>
        <td className="hms">
          <div style={{ height: "1em" }}>22:20:57</div>
          <span style={{ fontSize: "9pt" }}>72 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  22">
        <td className="dateTime">2025-05-26 - 2025-06-02</td>
        <td className="hms">2:06:00</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:32:52</div>
          <span style={{ fontSize: "9pt" }}>288 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:59:42</td>
        <td className="hms">
          <div style={{ height: "1em" }}>7:54:42</div>
          <span style={{ fontSize: "9pt" }}>202 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  23">
        <td className="dateTime">2025-06-02 - 2025-06-09</td>
        <td className="hms">1:26:47</td>
        <td className="hms">
          <div style={{ height: "1em" }}>3:21:09</div>
          <span style={{ fontSize: "9pt" }}>477 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:04:06</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:47:38</div>
          <span style={{ fontSize: "9pt" }}>334 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  24">
        <td className="dateTime">2025-06-09 - 2025-06-16</td>
        <td className="hms">1:49:21</td>
        <td className="hms">
          <div style={{ height: "1em" }}>15:13:01</div>
          <span style={{ fontSize: "9pt" }}>105 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:35:42</td>
        <td className="hms">
          <div style={{ height: "1em" }}>21:39:53</div>
          <span style={{ fontSize: "9pt" }}>74 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  25">
        <td className="dateTime">2025-06-16 - 2025-06-23</td>
        <td className="hms">1:20:34</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:30:47</div>
          <span style={{ fontSize: "9pt" }}>355 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:54:16</td>
        <td className="hms">
          <div style={{ height: "1em" }}>6:24:04</div>
          <span style={{ fontSize: "9pt" }}>250 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  26">
        <td className="dateTime">2025-06-23 - 2025-07-07</td>
        <td className="hms">1:16:16</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:21:19</div>
          <span style={{ fontSize: "9pt" }}>1181 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:48:16</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:55:26</div>
          <span style={{ fontSize: "9pt" }}>832 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  27">
        <td className="dateTime">2025-07-07 - 2025-07-14</td>
        <td className="hms">1:30:00</td>
        <td className="hms">
          <div style={{ height: "1em" }}>3:01:52</div>
          <span style={{ fontSize: "9pt" }}>528 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:08:19</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:19:19</div>
          <span style={{ fontSize: "9pt" }}>370 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  28">
        <td className="dateTime">2025-07-14 - 2025-07-21</td>
        <td className="hms">1:40:43</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:14:09</div>
          <span style={{ fontSize: "9pt" }}>306 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:24:25</td>
        <td className="hms">
          <div style={{ height: "1em" }}>7:30:25</div>
          <span style={{ fontSize: "9pt" }}>213 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  29">
        <td className="dateTime">2025-07-21 - 2025-07-28</td>
        <td className="hms">1:17:48</td>
        <td className="hms">
          <div style={{ height: "1em" }}>3:10:53</div>
          <span style={{ fontSize: "9pt" }}>503 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:56:52</td>
        <td className="hms">
          <div style={{ height: "1em" }}>4:46:44</div>
          <span style={{ fontSize: "9pt" }}>335 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  30">
        <td className="dateTime">2025-07-28 - 2025-08-04</td>
        <td className="hms">0:52:19</td>
        <td className="hms">
          <div style={{ height: "1em" }}>0:42:03</div>
          <span style={{ fontSize: "9pt" }}>2283 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:18:28</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:03:03</div>
          <span style={{ fontSize: "9pt" }}>1523 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  31">
        <td className="dateTime">2025-08-04 - 2025-08-11</td>
        <td className="hms">0:51:27</td>
        <td className="hms">
          <div style={{ height: "1em" }}>81:34:46</div>
          <span style={{ fontSize: "9pt" }}>20 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:17:10</td>
        <td className="hms">
          <div style={{ height: "1em" }}>122:19:34</div>
          <span style={{ fontSize: "9pt" }}>13 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  32">
        <td className="dateTime">2025-08-11 - 2025-08-18</td>
        <td className="hms">1:27:24</td>
        <td className="hms">
          <div style={{ height: "1em" }}>238:45:27</div>
          <span style={{ fontSize: "9pt" }}>7 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:11:03</td>
        <td className="hms">
          <div style={{ height: "1em" }}>358:00:35</div>
          <span style={{ fontSize: "9pt" }}>4 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  33">
        <td className="dateTime">2025-08-18 - 2025-08-25</td>
        <td className="hms">1:06:06</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:08:07</div>
          <span style={{ fontSize: "9pt" }}>1409 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:39:10</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:42:11</div>
          <span style={{ fontSize: "9pt" }}>939 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  34">
        <td className="dateTime">2025-08-25 - 2025-09-01</td>
        <td className="hms">0:57:23</td>
        <td className="hms">
          <div style={{ height: "1em" }}>0:47:25</div>
          <span style={{ fontSize: "9pt" }}>2025 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:25:21</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:10:31</div>
          <span style={{ fontSize: "9pt" }}>1361 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  35">
        <td className="dateTime">2025-09-01 - 2025-09-08</td>
        <td className="hms">1:30:51</td>
        <td className="hms">
          <div style={{ height: "1em" }}>0:49:39</div>
          <span style={{ fontSize: "9pt" }}>1934 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:14:36</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:13:33</div>
          <span style={{ fontSize: "9pt" }}>1305 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  36">
        <td className="dateTime">2025-09-08</td>
        <td className="hms">1:13:48</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">1:49:12</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  37">
        <td className="dateTime">2025-09-09</td>
        <td className="hms">1:04:08</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">1:35:01</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  38">
        <td className="dateTime">2025-09-10</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  39">
        <td className="dateTime">2025-09-11</td>
        <td className="hms">1:14:26</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">1:50:50</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  40">
        <td className="dateTime">2025-09-12</td>
        <td className="hms">1:16:30</td>
        <td className="hms">
          <div style={{ height: "1em" }}>2:12:25</div>
          <span style={{ fontSize: "9pt" }}>725 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:54:05</td>
        <td className="hms">
          <div style={{ height: "1em" }}>3:17:29</div>
          <span style={{ fontSize: "9pt" }}>486 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  41">
        <td className="dateTime">2025-09-13</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  42">
        <td className="dateTime">2025-09-14</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  43">
        <td className="dateTime">2025-09-15</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  44">
        <td className="dateTime">2025-09-16</td>
        <td className="hms">1:33:53</td>
        <td className="hms">
          <div style={{ height: "1em" }}>3:48:53</div>
          <span style={{ fontSize: "9pt" }}>419 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">2:20:01</td>
        <td className="hms">
          <div style={{ height: "1em" }}>5:41:20</div>
          <span style={{ fontSize: "9pt" }}>281 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  45">
        <td className="dateTime">2025-09-17</td>
        <td className="hms">1:06:16</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="hms">1:38:52</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  46">
        <td className="dateTime">2025-09-18</td>
        <td className="hms">1:16:28</td>
        <td className="hms">
          <div style={{ height: "1em" }}>0:44:34</div>
          <span style={{ fontSize: "9pt" }}>2154 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:54:04</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:06:30</div>
          <span style={{ fontSize: "9pt" }}>1444 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  47">
        <td className="dateTime">2025-09-19</td>
        <td className="hms">1:07:59</td>
        <td className="hms">
          <div style={{ height: "1em" }}>0:55:52</div>
          <span style={{ fontSize: "9pt" }}>1718 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">1:41:30</td>
        <td className="hms">
          <div style={{ height: "1em" }}>1:23:25</div>
          <span style={{ fontSize: "9pt" }}>1151 % / 16 h</span>
        </td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="odd  48">
        <td className="dateTime">2025-09-20</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
      <tr style={{ verticalAlign: "top" }} className="even  49">
        <td className="dateTime">2025-09-21</td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
        <td className="colBreak"> </td>
        <td className="nullValue">-</td>
        <td className="nullValue">-</td>
      </tr>
    </tbody>
  </table>
  <div
    className="explanation2"
    style={{ marginTop: "1em", marginBottom: "0.4em" }}
  >
    Current estimate of battery life based on all observed drains since OS
    install
  </div>
  <table>
    <colgroup>
      <col />
      <col className="col2" />
      <col style={{ width: "10em" }} />
      <col style={{}} />
      <col style={{ width: "10em" }} />
      <col style={{ width: "10em" }} />
      <col style={{ width: "10em" }} />
    </colgroup>
    <tbody>
      <tr className="even" style={{ verticalAlign: "top" }}>
        <td>Since OS install</td>
        <td className="hms">2:22:10</td>
        <td className="hms">
          <div style={{ height: "1em" }}>11:07:38</div>
          <span style={{ fontSize: "9pt" }}>144 % / 16 h</span>
        </td>
        <td className="colBreak"> </td>
        <td className="hms">3:32:25</td>
        <td className="hms">
          <div style={{ height: "1em" }}>16:37:27</div>
          <span style={{ fontSize: "9pt" }}>96 % / 16 h</span>
        </td>
      </tr>
    </tbody>
  </table>
  <br />
  <br />
  <br />
</>

  );
}
