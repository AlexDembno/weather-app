export function getWeatherVideoById(id: number): string {
  if (id >= 200 && id < 300) {
    return "/videos/thunderstorm.mp4";
  }
  if (id >= 300 && id < 400) {
    return "/videos/rain2.mp4";
  }
  if (id >= 500 && id < 600) {
    return "/videos/rain.mp4";
  }
  if (id >= 600 && id < 700) {
    return "/videos/snow.mp4";
  }
  if (id >= 700 && id < 800) {
    return "/videos/clouds2.mp4";
  }
  if (id === 800) {
    return "/videos/clear2.mp4";
  }
  if (id > 800 && id <= 802) {
    return "/videos/clear.mp4";
  }
  if (id >= 803 && id <= 804) {
    return "/videos/clouds2.mp4";
  }

  console.log("Default");
  return "/videos/clear2.mp4";
}

export function getWeatherBackgroundById(id: number): string {
  if (id >= 200 && id < 300) {
    return "bg-gradient-to-br from-slate-900 via-indigo-950 to-black";
  }

  if (id >= 300 && id < 600) {
    return "bg-gradient-to-br from-[#0b2a4a] via-slate-900 to-[#000814]";
  }

  if (id >= 600 && id < 700) {
    return "bg-gradient-to-br from-amber-50 via-sky-50 to-blue-100";
  }

  if (id >= 700 && id < 800) {
    return "bg-gradient-to-br from-slate-200 via-slate-100 to-sky-200";
  }

  if (id === 800) {
    return "bg-gradient-to-br from-amber-100 via-orange-200 to-sky-300";
  }

  if (id > 800 && id <= 804) {
    return "bg-gradient-to-br from-sky-200 via-slate-200 to-sky-400";
  }

  return "bg-gradient-to-br from-sky-100 via-white to-sky-200";
}
