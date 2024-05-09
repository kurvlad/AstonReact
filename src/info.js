// 1) Жизненные циклы Компонента
// 1. монтирование
// 2. обновление
// 3. размонтирование

// последовательность на этапе монтирования
// 1) constructor()
// 2) static getDerivedStateFromProps();
// 3) render();
// 4) componentDidMount();

// последовательность на этапе обновления
// 1) static getDerivedStateFromProps();
// 2) shouldComponentUpdate();
// 3) render();
// 4) getShapshotBeforeUpdate();
// 5) componentDidUpdate();

// последовательность на этапе размонтирования(удаления)
// 1) componentWillUnmount();

// render()- обязательный метод в классовом компоненте. Чистая функция. 

// constructor(props)- инициализация внутреннего состояния
// - Привязка обработчиков события
// Для определения this.props нужно вызвать метод super(props);
// !!!Не копируй пропсы в состояние!!!

// setState()- работает как запрос и меняет state
// React может задержать выполнение setState, поэтому нельзя сразу же считывать объект this.state


// componentDidMount()- вызывается после монтирования.
//  Можно создавать сетевые запросы

// componentDidUpdate(prevProps, prevState, snapshot);
// componentDidUpdate- вызывается после обновления.
// Можно работать с сетевыми запросами, если нужно сравнивать текущие пропсы с предыдущими
// setState- нужно обернуть в условие, иначе произойдет постоянное обновление

// componentWillUnmount()- вызывается перед размонтированием и удалением элемента

// shouldComponentUpdate(nextProps,nextState)- Перед рендером. Изменились ли пропсы и нужно ли мне вызывать рендер 


// Предохранители- компоненты, которые перехватывают ошибки в дочерних компонентах
// static getDerivedStateFromError();
// static componentDidCatch();




