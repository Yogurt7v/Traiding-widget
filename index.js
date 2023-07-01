let dayHour = new Date().getHours();
let a;
if (dayHour < 19) {
  a = "light";
} else {
  a = "dark";
}

console.log(a);

new TradingView.widget({
  autosize: true,
  symbol: "FX_IDC:USDRUB",
  interval: "240",
  timezzone: "MOEX:USDRUB_TOM",
  theme: a,
  style: "1",
  locale: "ru",
  toolbar_bg: "#f1f3f6",
  enable_publishing: true,
  withdateranges: true,
  hide_side_toolbar: false,
  allow_symbol_change: true,
  watchlist: ["FX_IDC:USDRUB", "FX_IDC:EURRUB"],
  details: true,
  hotlist: true,
  calendar: true,
  studies: ["STD;SMA"],
  container_id: "chart",
  show_popup_button: true,
  popup_wigth: "1000",
  popup_height: "650",
});
