export function ExternalTextLink(props: { text: string, href: string }) {
  return <a
    className="App-link"
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.text}
  </a>;
}