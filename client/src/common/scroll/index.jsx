import React, { Component } from 'react';
import BScroll from 'better-scroll';
import './scroll.css';
class Scroll extends Component {
  state = {  }
  componentDidUpdate() {
    if(this.bscroll && this.props.refresh) {
      this.bscroll.refresh()
    }
  }
  componentDidMount() {
    if(!this.bscroll) {
      this.bscroll = new BScroll(this.refs.scrollView, {
        scrollX: true,
        probeType: 3,
        // click: this.props.click
        click: () => {}
      })
    }
     //监听滚动方法
    this.bscroll.on('scroll', (e) => {
      this.props.onScroll(e);
    })
  }
  componentWillUnmount() {
    this.bscroll = null
  }
  render() { 
    return ( 
      <div className="scroll-view" ref="scrollView">
        {this.props.children}
      </div>
    );
  }
}
 
export default Scroll;