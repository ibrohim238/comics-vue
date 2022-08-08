export default function getDomainName(hostName) {
  return hostName.substring(hostName.lastIndexOf('.', hostName.lastIndexOf('.') - 1) + 1);
}
