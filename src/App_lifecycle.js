// lifecycle: UI framework - Component lifecycle(수명주기)
// onCreate, render
// class component
// life cycle method
//  will: 작동 전에 미래를 이야기 함
//  did: 작동 후
//  마운트->업데이트->언마운트
// 마운트: constructor->getDerivedStateFromProps->render
//          componentDidMount
// 업데이트: props, state, 부모의 화면, this.forceUpdate이/가 바뀔 때
//          getDerivedStateFromProps->shouldComponentUpdate
//          ->render->getSnapshotBeforeUpdate->componentDidUpdate
// 언마운트: 