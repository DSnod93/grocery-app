class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: "test",
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    if (this.state.animationClass === "test") {
      this.setState({
        animationClass: "test paused",
      });
    } else {
      this.setState({
        animationClass: "test",
      });
    }
  }
  render() {
    return <div className={this.state.animationClass}></div>;
  }
}

React.render(<Application />, document.getElementById("root"));
