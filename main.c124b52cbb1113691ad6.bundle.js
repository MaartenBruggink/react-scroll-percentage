(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(module){module.exports={name:"react-scroll-percentage",version:"4.0.3",description:"Monitor the scroll percentage of a component inside the viewport, using the IntersectionObserver API.",main:"react-scroll-percentage.cjs.js","jsnext:main":"react-scroll-percentage.esm.js",module:"react-scroll-percentage.esm.js",unpkg:"react-scroll-percentage.umd.min.js",author:"Daniel Schmidt",private:!0,repository:{type:"git",url:"https://github.com/thebuilder/react-scroll-percentage"},license:"MIT",keywords:["react","component","viewport","intersection","scroll","inview"],prettier:{singleQuote:!0,semi:!1,trailingComma:"all",proseWrap:"always"},eslintIgnore:["*.snap","test-utils.js","dist/**","lib/**","example/**","webpack.config.js"],scripts:{coveralls:"cat ./coverage/lcov.info | coveralls",prebuild:"rm -rf dist lib",build:"run-s build:*","build:lib":"rollup -c","build:ts":"tsc -p tsconfig.build.json","build:copy":"node scripts/build-copy.js",dev:"concurrently -k -r 'jest --watch' 'yarn run storybook'",lint:"eslint . --ext js,ts,tsx",preversion:"yarn build",pretty:"prettier '**/*.{js,ts,tsx,md,,yml,html}' --write",storybook:"start-storybook -p 9000","storybook:build":"build-storybook --output-dir example",test:"jest"},np:{yarn:!1,contents:"dist"},husky:{hooks:{"pre-commit":"tsc && lint-staged"}},"lint-staged":{"*.{js,,css,md,ts,tsx}":["prettier --write","git add"],"src/**/*.{ts,tsx}":["eslint","jest --findRelatedTests"]},eslintConfig:{extends:["react-app"],parser:"@typescript-eslint/parser",plugins:["@typescript-eslint","react-hooks"],settings:{react:{version:"detect"}},rules:{"no-unused-vars":0,"react-hooks/rules-of-hooks":"error","react-hooks/exhaustive-deps":"warn"}},jest:{testEnvironment:"jsdom",setupFilesAfterEnv:["react-testing-library/cleanup-after-each","jest-dom/extend-expect"],coveragePathIgnorePatterns:["/node_modules/"]},dependencies:{"@babel/runtime":"^7.4.5","react-intersection-observer":"^8.23.0"},peerDependencies:{react:"^15.0.0 || ^16.0.0 || ^17.0.0"},devDependencies:{"@babel/cli":"^7.4.4","@babel/core":"^7.4.5","@babel/plugin-proposal-class-properties":"^7.4.4","@babel/plugin-transform-runtime":"^7.4.4","@babel/preset-env":"^7.4.5","@babel/preset-react":"^7.0.0","@babel/preset-typescript":"^7.1.0","@storybook/addon-actions":"^5.0.11","@storybook/addon-knobs":"^5.0.11","@storybook/components":"^5.0.11","@storybook/react":"^5.0.11","@storybook/theming":"^5.0.11","@types/jest":"^24.0.13","@types/react":"^16.8.19","@types/react-dom":"^16.8.2","@types/storybook__addon-actions":"^3.4.1","@types/storybook__addon-knobs":"^5.0.0","@types/storybook__react":"^4.0.0","@types/styled-components":"^4.1.15","@typescript-eslint/eslint-plugin":"^1.9.0","@typescript-eslint/parser":"^1.9.0","babel-eslint":"10.0.1","babel-jest":"^24.8.0","babel-loader":"^8.0.6",concurrently:"^4.1.0",coveralls:"^3.0.3",eslint:"^5.15.2","eslint-config-react-app":"^4.0.1","eslint-plugin-flowtype":"^3.9.1","eslint-plugin-import":"^2.17.3","eslint-plugin-jsx-a11y":"^6.2.1","eslint-plugin-react":"^7.13.0","eslint-plugin-react-hooks":"^1.5.0",husky:"^2.3.0","intersection-observer":"^0.7.0",jest:"^24.8.0","jest-dom":"^3.4.0","lint-staged":"^8.1.7","npm-run-all":"^4.1.5",prettier:"^1.17.1",react:"^16.8.3","react-dom":"^16.8.3","react-hooks-testing-library":"^0.5.0","react-test-renderer":"^16.8.3","react-testing-library":"^7.0.1",rollup:"^1.12.5","rollup-plugin-babel":"^4.3.2","rollup-plugin-commonjs":"^10.0.0","rollup-plugin-node-resolve":"^5.0.0","rollup-plugin-replace":"^2.1.0","rollup-plugin-terser":"^5.0.0","styled-components":"^4.2.1",typescript:"^3.5.1"}}},18:function(module,__webpack_exports__,__webpack_require__){"use strict";var classCallCheck=__webpack_require__(268),createClass=__webpack_require__(269),possibleConstructorReturn=__webpack_require__(273),getPrototypeOf=__webpack_require__(270),inherits=__webpack_require__(274),assertThisInitialized=__webpack_require__(6),defineProperty=__webpack_require__(17),react=__webpack_require__(0),react_intersection_observer_esm=__webpack_require__(125);function calculateVerticalPercentage(bounds){var threshold=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,root=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;if(!root)return 0;var vh=(root instanceof Element?root.clientHeight:root.innerHeight)||0,offset=threshold*bounds.height,percentage=(bounds.bottom-offset)/(vh+bounds.height-2*offset);return 1-Math.max(0,Math.min(1,percentage))}function calculateHorizontalPercentage(bounds){var threshold=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,root=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;if(!root)return 0;var vw=(root instanceof Element?root.clientWidth:root.innerWidth)||0,offset=threshold*bounds.width,percentage=(bounds.right-offset)/(vw+bounds.width-2*offset);return 1-Math.max(0,Math.min(1,percentage))}function isPlainChildren(props){return"function"!=typeof props.children}var ScrollPercentage_ScrollPercentage=function(_React$Component){function ScrollPercentage(){var _getPrototypeOf2,_this;Object(classCallCheck.a)(this,ScrollPercentage);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(possibleConstructorReturn.a)(this,(_getPrototypeOf2=Object(getPrototypeOf.a)(ScrollPercentage)).call.apply(_getPrototypeOf2,[this].concat(args))),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"state",{percentage:0,inView:!1,entry:void 0}),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"node",void 0),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"monitoring",!1),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"handleScroll",function(){if(_this.node){var bounds=_this.node.getBoundingClientRect(),percentage=_this.props.horizontal?calculateHorizontalPercentage(bounds,_this.props.threshold,_this.props.root):calculateVerticalPercentage(bounds,_this.props.threshold,_this.props.root);percentage!==_this.state.percentage&&_this.setState({percentage:percentage})}}),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"handleInView",function(inView,entry){_this.node=entry.target,_this.setState({entry:entry,inView:inView})}),Object(defineProperty.a)(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this)),"handleRenderProps",function(_ref){var ref=_ref.ref,_this$state=_this.state,percentage=_this$state.percentage,entry=_this$state.entry,inView=_this$state.inView;return isPlainChildren(_this.props)?null:_this.props.children({percentage:percentage,entry:entry,inView:inView,ref:ref})}),_this}return Object(inherits.a)(ScrollPercentage,_React$Component),Object(createClass.a)(ScrollPercentage,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){!this.props.onChange||prevState.percentage===this.state.percentage&&prevState.inView===this.state.inView||this.props.onChange(this.state.percentage,this.state.entry),prevProps.root!==this.props.root&&this.monitoring&&(this.monitorScroll(!1,prevProps.root),this.monitorScroll(this.state.inView)),prevState.inView!==this.state.inView&&this.monitorScroll(this.state.inView,prevProps.root)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.monitorScroll(!1)}},{key:"monitorScroll",value:function monitorScroll(enabled,target){var root=target||this.props.root||window;if(enabled){if(this.monitoring)return;root.addEventListener("scroll",this.handleScroll,{passive:!0}),root.addEventListener("resize",this.handleScroll),this.handleScroll(),this.monitoring=!0}else{if(!this.monitoring)return;root.removeEventListener("scroll",this.handleScroll),root.removeEventListener("resize",this.handleScroll),this.monitoring=!1}}},{key:"render",value:function render(){return react.createElement(react_intersection_observer_esm.a,{onChange:this.handleInView},isPlainChildren(this.props)?this.props.children:this.handleRenderProps)}}]),ScrollPercentage}(react.Component);Object(defineProperty.a)(ScrollPercentage_ScrollPercentage,"displayName","ScrollPercentage"),Object(defineProperty.a)(ScrollPercentage_ScrollPercentage,"defaultProps",{threshold:0});var slicedToArray=__webpack_require__(86);function useScrollPercentage(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_useInView=Object(react_intersection_observer_esm.b)(options),_useInView2=Object(slicedToArray.a)(_useInView,3),ref=_useInView2[0],inView=_useInView2[1],entry=_useInView2[2],target=entry&&entry.target,_useState=Object(react.useState)(0),_useState2=Object(slicedToArray.a)(_useState,2),percentage=_useState2[0],setPercentage=_useState2[1],handleScroll=Object(react.useCallback)(function(){if(target){var bounds=target.getBoundingClientRect(),percentage=options.horizontal?calculateHorizontalPercentage(bounds,options.threshold,options.root):calculateVerticalPercentage(bounds,options.threshold,options.root);setPercentage(percentage)}},[target,options.threshold,options.root,options.horizontal]);return Object(react.useEffect)(function(){if(inView){var root=options.root||window;return root.addEventListener("scroll",handleScroll,{passive:!0}),root.addEventListener("resize",handleScroll),handleScroll(),function(){root.removeEventListener("scroll",handleScroll),root.removeEventListener("resize",handleScroll)}}},[inView,options.root,handleScroll]),[ref,percentage,entry]}__webpack_require__.d(__webpack_exports__,"a",function(){return ScrollPercentage_ScrollPercentage}),__webpack_require__.d(__webpack_exports__,"b",function(){return useScrollPercentage})},272:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),calcPercentage=function calcPercentage(percentage){return Math.floor(100*percentage)},statusElement={position:"fixed",top:0,right:0,height:32,minWidth:42,padding:"0 10px",background:"rgba(255, 255, 255, 0.6)",display:"flex",justifyContent:"flex-end",alignItems:"center",borderRadius:"0 0 0 10px"},percentageStyle={fontFamily:"monospace",fontSize:"1.25rem"};__webpack_exports__.a=function Status(_ref){var percentage=_ref.percentage;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:statusElement},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:percentageStyle},calcPercentage(percentage),"%"))}},275:function(module,exports,__webpack_require__){__webpack_require__(276),__webpack_require__(355),module.exports=__webpack_require__(356)},356:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(37),_storybook_theming__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(264),_package__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(505),__webpack_require__(169)),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(58);function _templateObject(){var data=function _taggedTemplateLiteralLoose(strings,raw){raw||(raw=strings.slice(0));return strings.raw=raw,strings}(["\nhtml {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  color: #0c0c0c;\n  font-size: 16px;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n"]);return _templateObject=function _templateObject(){return data},data}var GlobalStyles=Object(styled_components__WEBPACK_IMPORTED_MODULE_5__.a)(_templateObject());Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_2__.create)({base:"dark",brandTitle:_package__WEBPACK_IMPORTED_MODULE_4__.name,brandUrl:_package__WEBPACK_IMPORTED_MODULE_4__.repository.url}),isFullscreen:!1,panelPosition:"bottom"}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(function(storyFn){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyles,{suppressMultiMountWarning:!0}),storyFn())});var req=__webpack_require__(510);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){req.keys().forEach(req)},module)}.call(this,__webpack_require__(140)(module))},38:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(58);function _templateObject2(){var data=Object(_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  width: 300vw;\n  display: flex;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #2d1176;\n  color: white;\n"]);return _templateObject=function _templateObject(){return data},data}var ScrollBlock=styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div(_templateObject()),Horizontal=styled_components__WEBPACK_IMPORTED_MODULE_2__.b.div(_templateObject2());__webpack_exports__.a=function ScrollWrapper(_ref){var children=_ref.children;return _ref.horizontal?react__WEBPACK_IMPORTED_MODULE_1__.createElement(Horizontal,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(ScrollBlock,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1",null,"Scroll right"," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{role:"img","aria-label":"Point right"},"👉"))),children,react__WEBPACK_IMPORTED_MODULE_1__.createElement(ScrollBlock,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1",null,"Scroll left"," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{role:"img","aria-label":"Point left"},"👈")))):react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(ScrollBlock,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1",null,"Scroll down"," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{role:"img","aria-label":"Point down"},"👇"))),children,react__WEBPACK_IMPORTED_MODULE_1__.createElement(ScrollBlock,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1",null,"Scroll up"," ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("span",{role:"img","aria-label":"Point up"},"👆"))))}},510:function(module,exports,__webpack_require__){var map={"./Hooks.story.tsx":511,"./ScrollPercentage.story.tsx":587};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=510},511:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(86),_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(123),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(37),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(124),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(58),_src__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(173),_ScrollWrapper__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(38);function _templateObject(){var data=Object(_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a)(["\n  background: #148bb4;\n  color: azure;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 3em 1em;\n  min-width: 20vw;\n  font-size: 2rem;\n  flex: 1 1 auto;\n"]);return _templateObject=function _templateObject(){return data},data}var Content=styled_components__WEBPACK_IMPORTED_MODULE_6__.b.div(_templateObject()),HookComponent=function HookComponent(props){var _useScrollPercentage=Object(_src__WEBPACK_IMPORTED_MODULE_7__.b)(function getOptions(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{threshold:0},threshold=options.threshold;return Object(_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__.a)({},options,{threshold:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.number)("Threshold",threshold||0,{range:!0,min:0,max:1,step:.1})})}(props.options)),_useScrollPercentage2=Object(_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useScrollPercentage,2),ref=_useScrollPercentage2[0],percentage=_useScrollPercentage2[1];return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function(){var debounced=setTimeout(function(){Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action)("scroll")(100*percentage)},50);return function(){clearTimeout(debounced)}},[percentage]),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Content,{ref:ref},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("code",null,"Percentage: ",Math.floor(100*percentage),"%"))};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("useScrollPercentage",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_8__.withKnobs).add("Example vertical",function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ScrollWrapper__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HookComponent,null))}).add("Example horizontal",function(){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ScrollWrapper__WEBPACK_IMPORTED_MODULE_9__.a,{horizontal:!0},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HookComponent,{options:{horizontal:!0}}))})}.call(this,__webpack_require__(140)(module))},587:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(123),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(124),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_ScrollWrapper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(38),_Status__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(272),calcPercentage=function calcPercentage(percentage){return Math.floor(100*percentage)},Header=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(props,ref){return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{ref:ref,style:Object(_home_travis_build_thebuilder_react_scroll_percentage_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a)({display:"flex",minHeight:"25vh",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",background:"lightcoral",color:"azure"},props.style)},void 0!==props.percentage?react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Status__WEBPACK_IMPORTED_MODULE_6__.a,{percentage:props.percentage}):null,props.threshold?react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2",{style:{marginTop:0}},"Threshold: ".concat(props.threshold.toString(),"%")):null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",{style:{marginBottom:0}},props.children))});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Scroll Percentage",module).add("Child as function",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,null,function(_ref){var percentage=_ref.percentage,ref=_ref.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,percentage:percentage},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}))}).add("Taller then viewport",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,null,function(_ref2){var percentage=_ref2.percentage,ref=_ref2.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{height:"150vh"},percentage:percentage},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}))}).add("With threshold",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:0},function(_ref3){var percentage=_ref3.percentage,ref=_ref3.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,threshold:0},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:.25},function(_ref4){var percentage=_ref4.percentage,ref=_ref4.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{background:"slategrey"},threshold:25},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:.5},function(_ref5){var percentage=_ref5.percentage,ref=_ref5.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{background:"plum"},threshold:50},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:.75},function(_ref6){var percentage=_ref6.percentage,ref=_ref6.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{background:"lightseagreen"},threshold:75},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,{threshold:1},function(_ref7){var percentage=_ref7.percentage,ref=_ref7.ref;return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,{ref:ref,style:{background:"cornflowerblue"},threshold:100},"Percentage scrolled: ".concat(calcPercentage(percentage),"%."))}))}).add("onChange function",function(){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ScrollWrapper__WEBPACK_IMPORTED_MODULE_5__.a,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_src__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Scroll")},react__WEBPACK_IMPORTED_MODULE_1__.createElement(Header,null,"Scroll percentage dispatched to ",react__WEBPACK_IMPORTED_MODULE_1__.createElement("em",null,"onChange"))))})}.call(this,__webpack_require__(140)(module))}},[[275,1,2]]]);
//# sourceMappingURL=main.c124b52cbb1113691ad6.bundle.js.map