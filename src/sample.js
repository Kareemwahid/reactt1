class Extra extends React.Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
  return <h1>Extra Component called {this.props.color}</h1>
}
}
class Sample extends React.Component
{
  constructor(props)
  {
    super(props)
    this.username = props.name
    this.userage = props.age
    console.log('Constuctor called' + props.name + props.age);
  }
  display = (a,b, event)=>{
  console.log('Display method called' + a+ b+ event.type);
  }
  render()
  {
    console.log('Render called');
  
  return <h1>Hello All!{this.props.name} {this.props.username}</h1>
  }
}
  const root = ReactDOM.createRoot(document.getElementById('root'))
  <Dummy color='red'/>
  <button onClick={(event)=>this.display(10,30,event)}>call display method</button>
  root.render(<Sample name='kareem' age='22'/>)
