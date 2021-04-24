export function parsingURL(id) {
  // split locahost:3000 -> ['locahost', '3000']
  const currentHost = window.location.host.split(":")[0];

  if (currentHost === "localhost") {
    return `http://${window.location.host}/#${id}`;
  }

  return `https://${window.location.host}/#${id}`;
}
