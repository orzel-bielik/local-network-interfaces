import { networkInterfaces } from "os";

function lanInterface() {
  const nets = networkInterfaces();
  const results = []; // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
      if (net.family === familyV4Value && !net.internal) {
        results.push(net.address);
      }
    }
  }

  const lanInterface =
    results.find((n) => n.startsWith("10.42.")) ||
    results.find((n) => n.startsWith("192.168.") && n !== "192.168.0.1");
  console.log(lanInterface);
}

export default lanInterface;
