## Steps to set up Redux

- [ ] `create-react-app appName`
- [ ] `npm i redux react-redux`
- [ ] create `ducks` or `redux` folder
- [ ] Inside of your newly created folder, create store.js and your reducer(s)
- [ ] `import createStore from 'redux'` inside of store.js
- [ ] import your reducer you will create
- [ ] Create reducer file
- [ ] import `Provider` and wrap your app with it (or whatever component needs it)
- [ ] Pass a `store={store}` prop on the Provider
- [ ] Connect any needed components using mapStateToProps and Connect
- [ ] `const mapStateToProps = state => state`
- [ ] `export default connect(mapStateToProps)(ComponentName)`