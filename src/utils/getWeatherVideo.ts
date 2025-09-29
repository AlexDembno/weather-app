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

export function getHeaderInputById(id?: number) {
  const fallback = {
    header: "bg-gradient-to-r from-sky-400 via-sky-300 to-amber-200",
    title: "text-white drop-shadow-lg",
    inputWrapper: "w-full max-w-md",
    input:
      "w-full px-4 py-3 rounded-xl border border-white/30 " +
      "bg-white/90 text-gray-900 placeholder-gray-500 " +
      "shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 " +
      "transition duration-200",
  };

  if (!id && id !== 0) return fallback;

  if (id >= 200 && id < 300) {
    return {
      header: "bg-gradient-to-r from-indigo-900 via-violet-900 to-black",
      title: "text-white drop-shadow-lg",
      inputWrapper:
        "w-full max-w-md supports-[backdrop-filter]:backdrop-blur-sm",
      input:
        "w-full px-4 py-3 rounded-xl border border-white/20 " +
        "bg-black/40 text-white placeholder-white/60 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 " +
        "transition duration-200",
    };
  }

  if (id >= 300 && id < 600) {
    return {
      header: "bg-gradient-to-r from-[#0b2a4a] via-slate-900 to-[#000814]",
      title: "text-white drop-shadow-lg",
      inputWrapper:
        "w-full max-w-md supports-[backdrop-filter]:backdrop-blur-sm",
      input:
        "w-full px-4 py-3 rounded-xl border border-white/20 " +
        "bg-white/10 text-white placeholder-white/70 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 " +
        "transition duration-200",
    };
  }

  if (id >= 600 && id < 700) {
    return {
      header: "bg-gradient-to-r from-amber-50 via-sky-50 to-blue-100",
      title: "text-slate-800 drop-shadow",
      inputWrapper: "w-full max-w-md",
      input:
        "w-full px-4 py-3 rounded-xl border border-slate-300 " +
        "bg-white/95 text-gray-900 placeholder-gray-500 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 " +
        "transition duration-200",
    };
  }

  if (id >= 700 && id < 800) {
    return {
      header: "bg-gradient-to-r from-slate-300 via-slate-200 to-sky-200",
      title: "text-slate-800 drop-shadow",
      inputWrapper: "w-full max-w-md",
      input:
        "w-full px-4 py-3 rounded-xl border border-slate-300 " +
        "bg-white/80 text-gray-900 placeholder-gray-500 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400 " +
        "transition duration-200",
    };
  }

  if (id === 800) {
    return {
      header: "bg-gradient-to-r from-amber-200 via-orange-200 to-sky-300",
      title: "text-white drop-shadow-lg",
      inputWrapper: "w-full max-w-md",
      input:
        "w-full px-4 py-3 rounded-xl border border-white/40 " +
        "bg-white/90 text-gray-900 placeholder-gray-600 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 " +
        "transition duration-200",
    };
  }

  if (id > 800 && id <= 802) {
    return {
      header: "bg-gradient-to-r from-sky-300 via-sky-200 to-indigo-200",
      title: "text-slate-900 drop-shadow",
      inputWrapper: "w-full max-w-md",
      input:
        "w-full px-4 py-3 rounded-xl border border-slate-300 " +
        "bg-white/90 text-gray-900 placeholder-gray-600 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 " +
        "transition duration-200",
    };
  }

  if (id >= 803 && id <= 804) {
    return {
      header: "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900",
      title: "text-white drop-shadow-lg",
      inputWrapper:
        "w-full max-w-md supports-[backdrop-filter]:backdrop-blur-sm",
      input:
        "w-full px-4 py-3 rounded-xl border border-white/20 " +
        "bg-gray-900/60 text-white placeholder-white/70 " +
        "shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 " +
        "transition duration-200",
    };
  }

  return fallback;
}
