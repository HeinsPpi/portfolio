const Greeting = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.elements.name.value
    alert(`Hello, ${name} !`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <button type="submit">送信</button>
    </form>
  )
}

export default Greeting