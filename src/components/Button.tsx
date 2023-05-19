const styles = {
  color: 'red',
  display: 'block',
}

interface ButtonProps {
  name: string
}

export default function Button(props: ButtonProps) {
  return <button style={styles}>{props.name}</button>
}
