const nav = [
  ["Overview", "◫"],
  ["Fundraising", "◈"],
  ["Programs & Impact", "▦"],
  ["Members", "♙"],
  ["Global Network", "◎"],
  ["Events", "▣"],
  ["Partnerships", "◇"],
  ["AI Insights", "✦"],
  ["Reports", "▤"],
  ["Settings", "⚙"],
];
let page = "Overview",
  period = "fy";
const $ = (s) => document.querySelector(s),
  money = (n) => "$" + (n / 1000000).toFixed(2) + "M";
function scale() {
  return period === "fy" ? 1 : period === "q3" ? 0.29 : 0.24;
}
function sample(n) {
  return Math.round(n * scale());
}
function metric(label, value, foot) {
  return `<div class="card kpi"><label>${label}</label><strong>${value}</strong><small>${foot}</small></div>`;
}
function title(t, right = "") {
  return `<div class="section-head"><h2>${t}</h2>${right}</div>`;
}
function bars() {
  return `<div class="card">${title("Fundraising trend", '<span class="muted">USD thousands · sample</span>')}<div class="chart">${DATA.monthly.map((n, i) => `<div class="bar-slot" title="${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}: $${n}k sample"><div class="bar target" style="height:${DATA.targets[i] / 9}%"></div><div class="bar actual" style="height:${n / 9}%"></div></div>`).join("")}</div><div class="months">${["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((x) => `<span>${x}</span>`).join("")}</div><div class="legend"><i class="dot"></i>Sample raised <i class="dot target"></i>Sample target</div></div>`;
}
function mix() {
  return `<div class="card">${title("Funding mix")}<div class="donut-row"><div class="donut" role="img" aria-label="Sample mix: major gifts 38%, individual 25%, grants 19%, other 18%"></div><div class="mix-list"><div><i style="background:#176d80"></i>Major gifts · 38%</div><div><i style="background:#4a9ca4"></i>Individual · 25%</div><div><i style="background:#94bbc1"></i>Grants · 19%</div><div><i style="background:#d4b374"></i>Partners & other · 18%</div></div></div></div>`;
}
function campaign() {
  let raised = sample(DATA.raised),
    pct = Math.round((raised / DATA.goal) * 100);
  return `<div class="card campaign"><div><p class="eyebrow" style="color:#d6b675">The GHLF campaign</p><h2>Investing in leadership.<br>Transforming healthcare.</h2><div class="amount">${money(raised)} <span>raised of $15.00M goal</span></div><div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Sample campaign progress"><span style="width:${pct}%"></span></div><p>${pct}% of goal · Sample progress</p></div><div class="campaign-stats"><div><small>Remaining to goal</small><strong>${money(DATA.goal - raised)}</strong></div><div><small>Sample donors</small><strong>${sample(DATA.donors).toLocaleString()}</strong></div><div><small>Average gift</small><strong>$${Math.round(raised / sample(DATA.donors)).toLocaleString()}</strong></div><div><small>Goal</small><strong>$15M</strong></div></div></div>`;
}
function pillars() {
  return `<section class="section">${title("Three strategic priorities")}<div class="grid pillars"><div class="card pillar"><div class="num">01 / LEADERSHIP</div><h2>Develop exceptional leaders</h2><p>Scholarships, mentorship and leadership programming.</p><div class="stat">${sample(468)} sample participants →</div></div><div class="card pillar"><div class="num">02 / INNOVATION</div><h2>Advance responsible innovation</h2><p>Practical pilots and cross-sector healthcare collaboration.</p><div class="stat">${sample(6)} sample initiatives →</div></div><div class="card pillar"><div class="num">03 / CONNECTION</div><h2>Connect leaders globally</h2><p>Chapters, convenings and partnerships across regions.</p><div class="stat">${sample(DATA.chapters)} sample chapters →</div></div></div></section>`;
}
function programTable() {
  return `<div class="card tablewrap">${title("Program performance", '<span class="muted">Illustrative records</span>')}<table><thead><tr><th>Program</th><th>Status</th><th>Participants</th><th>Progress</th><th>Pillar</th></tr></thead><tbody>${DATA.programsList.map((r) => `<tr><td>${r[0]}</td><td><span class="status ${r[1] === "At risk" ? "risk" : r[1] === "Planned" ? "plan" : ""}">${r[1]}</span></td><td>${sample(r[2])}</td><td>${r[3]}%</td><td>${r[4]}</td></tr>`).join("")}</tbody></table></div>`;
}
function aiPanel() {
  return `<div class="card ai">${title("GHLF AI Insights", '<span class="ai-badge">DEMO COPILOT</span>')}<div class="insight"><strong>Campaign pace</strong><p>Sample raised is ${Math.round((sample(DATA.raised) / DATA.goal) * 100)}% of the published $15M goal. Review the monthly pace against your actual campaign plan.</p></div><div class="insight"><strong>Program attention</strong><p>Clinical AI & Workflow Efficiency is marked at risk in the demonstration program data.</p></div><div class="insight"><strong>Network focus</strong><p>North America has the largest sample membership count. Explore regional engagement before allocating resources.</p></div><form class="ask" id="askForm"><input id="question" aria-label="Question for GHLF AI demo" placeholder="Ask about fundraising, programs or members…"><button class="btn primary">Ask</button></form><div class="response hidden" id="answer"></div><p class="muted" style="margin-top:11px">Demo assistant uses sample figures and preset analysis. It is not connected to a live AI model or GHLF systems.</p></div>`;
}
function render() {
  let el = $("#view");
  $("#pageTitle").textContent =
    page === "Overview" ? "Executive overview" : page;
  $("#pageSub").textContent = {
    Overview: "Leadership, innovation and global connection at a glance.",
    Fundraising: "Campaign progress, donor mix and funding trends.",
    "Programs & Impact":
      "Performance across the foundation’s strategic priorities.",
    Members: "Membership and engagement across the network.",
    "Global Network": "A regional view of the sample network.",
    Events: "Registration and attendance overview.",
    Partnerships: "Partner relationships and development pipeline.",
    "AI Insights": "Explore evidence-backed sample insights.",
    Reports: "Export a snapshot of the sample dashboard.",
    Settings: "Demo workspace information.",
  }[page];
  $("#nav").innerHTML = nav
    .map(
      ([n, i]) =>
        `<button class="${page === n ? "active" : ""}" data-page="${n}" ${page === n ? 'aria-current="page"' : ""}><span class="icon">${i}</span>${n}</button>`,
    )
    .join("");
  let kpis = `<div class="grid kpis">${metric("Total funds raised", money(sample(DATA.raised)), "Against $15M campaign goal")}${metric("Active members", sample(DATA.members).toLocaleString(), "Sample member records")}${metric("Global chapters", sample(DATA.chapters), "Sample chapter count")}${metric("Leaders engaged", sample(DATA.leaders).toLocaleString(), "Sample reach")}</div>`;
  if (page === "Overview")
    el.innerHTML =
      campaign() +
      kpis +
      `<section class="section grid twocol">${bars()}${mix()}</section>` +
      pillars() +
      `<section class="section grid twocol">${programTable()}${aiPanel()}</section>`;
  else if (page === "Fundraising")
    el.innerHTML =
      campaign() +
      `<div class="grid kpis">${metric("Donors", sample(DATA.donors), "Sample")}${metric("Average gift", "$" + Math.round(sample(DATA.raised) / sample(DATA.donors)).toLocaleString(), "Sample calculation")}${metric("Monthly pace", money(sample(DATA.raised) / 12), "Sample average")}${metric("Gap", money(DATA.goal - sample(DATA.raised)), "To published goal")}</div><div class="grid twocol">${bars()}${mix()}</div><section class="section">${title("Donor pipeline")}<div class="grid mini-grid">${["Prospect", "Engaged", "Committed"].map((x, i) => metric(x, [1260, 490, 168][i], "Illustrative donor count")).join("")}</div></section>`;
  else if (page === "Programs & Impact")
    el.innerHTML =
      pillars() + `<section class="section">${programTable()}</section>`;
  else if (page === "Members")
    el.innerHTML = `<div class="grid mini-grid">${metric("Total members", sample(DATA.members).toLocaleString(), "Illustrative")}${metric("New members", sample(216), "Illustrative")}${metric("Engagement rate", "68%", "Illustrative")}</div><section class="section card">${title("Membership journey")}<div class="grid mini-grid">${["Founding Member", "Leadership Member", "Innovation Fellow", "Chairman’s Circle"].map((x, i) => metric(x, [510, 420, 230, 88][i], "Sample members")).join("")}</div></section>`;
  else if (page === "Global Network")
    el.innerHTML = `<div class="grid mini-grid">${metric("Members", sample(DATA.members).toLocaleString(), "Illustrative")}${metric("Chapters", sample(DATA.chapters), "Illustrative")}${metric("Countries represented", "34", "Illustrative")}</div><section class="section card tablewrap">${title("Global GHLF network", '<span class="muted">Regional sample · map data connection pending</span>')}<table><thead><tr><th>Region</th><th>Members</th><th>Chapters</th><th>Partners</th></tr></thead><tbody>${DATA.regions.map((r) => `<tr><td>${r[0]}</td><td>${sample(r[1])}</td><td>${sample(r[2])}</td><td>${sample(r[3])}</td></tr>`).join("")}</tbody></table></section>`;
  else if (page === "Events")
    el.innerHTML = `<div class="grid mini-grid">${metric("Upcoming events", sample(DATA.events), "Illustrative")}${metric("Registrations", sample(1160), "Illustrative")}${metric("Attendance rate", "74%", "Illustrative")}</div><section class="section card">${title("Event pipeline")}<p class="sub">Connect an events system to see confirmed dates, registrations and attendance.</p></section>`;
  else if (page === "Partnerships")
    el.innerHTML = `<div class="grid mini-grid">${metric("Active partnerships", sample(DATA.partners), "Illustrative")}${metric("New prospects", sample(31), "Illustrative")}${metric("Programs supported", sample(7), "Illustrative")}</div><section class="section card">${title("Partnership pipeline")}<div class="grid mini-grid">${["Identified", "In discussion", "Active"].map((x, i) => metric(x, [31, 17, 42][i], "Sample organizations")).join("")}</div><p class="sub" style="margin-top:18px">Sponsorship relationships are tracked separately from philanthropic donations.</p></section>`;
  else if (page === "AI Insights")
    el.innerHTML = `<div class="grid twocol">${aiPanel()}<div class="card">${title("Campaign forecast")}<p class="sub">Illustrative straight-line projection based on the sample annual fundraising total.</p><div class="grid mini-grid" style="margin-top:20px;grid-template-columns:1fr 1fr">${metric("Sample actual", money(sample(DATA.raised)), "Observed in demo")}${metric("Year-end projection", money(sample(DATA.raised) * 1.12), "Illustrative scenario")}</div><p class="muted" style="margin-top:18px">This is a scenario, not a statistical forecast or guaranteed outcome. Connect historic data for a credible confidence range.</p></div></div>`;
  else if (page === "Reports")
    el.innerHTML = `<div class="card">${title("Export sample data")}<p class="sub">Download a CSV snapshot or generate a concise executive summary from the illustrative figures.</p><div class="report-actions"><button class="btn primary" id="exportReport">Download CSV</button><button class="btn" id="summaryButton">Generate executive summary</button><button class="btn" id="printButton">Print / save PDF</button></div><div id="summary" class="response hidden"></div></div>`;
  else
    el.innerHTML = `<div class="card">${title("Data connections")}<p class="sub">This workspace uses local demonstration data. Connect authorized fundraising, program, membership and event sources before operational use. AI features require a secure server integration and approved access policies.</p></div>`;
  document.querySelectorAll("[data-page]").forEach(
    (b) =>
      (b.onclick = () => {
        page = b.dataset.page;
        render();
        window.scrollTo(0, 0);
      }),
  );
  let form = $("#askForm");
  if (form)
    form.onsubmit = (e) => {
      e.preventDefault();
      let q = $("#question").value.toLowerCase(),
        ans = q.includes("member")
          ? `The demo contains ${sample(DATA.members).toLocaleString()} active members. Source: sample member summary.`
          : q.includes("program")
            ? `There are ${DATA.programsList.length} listed demo programs; Clinical AI & Workflow Efficiency is marked at risk. Source: sample program table.`
            : q.includes("event")
              ? `The demo shows ${sample(DATA.events)} upcoming events. Source: sample event summary.`
              : `The sample raised amount is ${money(sample(DATA.raised))} against the published $15M campaign goal (${Math.round((sample(DATA.raised) / DATA.goal) * 100)}%). Source: sample campaign data and GHLF campaign goal.`;
      $("#answer").textContent = ans;
      $("#answer").classList.remove("hidden");
    };
  $("#exportReport")?.addEventListener("click", exportCSV);
  $("#summaryButton")?.addEventListener("click", () => {
    let s = $("#summary");
    s.textContent = `Executive demo summary: Sample fundraising totals ${money(sample(DATA.raised))}, or ${Math.round((sample(DATA.raised) / DATA.goal) * 100)}% of the published $15M goal. The sample network contains ${sample(DATA.members)} members and ${sample(DATA.chapters)} chapters. One sample program is flagged at risk. Leadership should verify these metrics against source systems before using them for decisions.`;
    s.classList.remove("hidden");
  });
  $("#printButton")?.addEventListener("click", () => window.print());
}
function exportCSV() {
  let rows = [
    ["Metric", "Value", "Classification"],
    ["Campaign goal", DATA.goal, "GHLF website"],
    ["Funds raised", sample(DATA.raised), "Sample"],
    ["Members", sample(DATA.members), "Sample"],
    ["Chapters", sample(DATA.chapters), "Sample"],
    ["Donors", sample(DATA.donors), "Sample"],
    ["Reporting period", period, "Selected demo period"],
  ];
  let blob = new Blob([rows.map((r) => r.join(",")).join("\n")], {
      type: "text/csv",
    }),
    a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ghlf-dashboard-sample.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
$("#period").onchange = (e) => {
  period = e.target.value;
  render();
};
$("#exportTop").onclick = exportCSV;
render();
