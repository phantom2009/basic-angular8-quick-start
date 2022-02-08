function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-todos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todos/todos.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todos/todos.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTodosTodosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-container todo-container\">\n    <div class=\"todo-wrap\">\n        <div class=\"todo-header\">\n            <input \n                type=\"text\" \n                placeholder=\"请输入今天的任务，按回车键确认\"\n                (keydown)=\"onKeydown($event)\" />\t\n        </div>\n        <ul class=\"todo-main\">\n            <li \n                *ngFor=\"let item of todos;index as i\" \n                (mouseover)=\"onMouseOver(i,$event)\"\n                (mouseout)=\"onMouseOut(i,$event)\">\n                <label>\n                    <input \n                        type=\"checkbox\" \n                        [checked]=\"item.isFinished\" \n                        (change)=\"onTodoStatusChange(item.id,!item.isFinished,$event)\" />\n                    <span>{{item.title}}</span>\n                </label>\n                <button \n                    class=\"btn btn-warning\"\n                    [ngStyle]=\"{'display': item.activate ? 'inline-block' : 'none' }\"\n                    (click)=\"onRemoveTodoById(item.id)\">\n                    删除\n                </button>\n            </li>\n        </ul>\n        <div class=\"todo-footer\">\n            <label>\n                <input \n                    type=\"checkbox\" \n                    [checked]=\"finishedCount === todos.length\"\n                    (change)=\"onChangeSelectAllTodos(finishedCount !== todos.length,$event)\" />\n            </label>\n            <span><span>已完成{{finishedTodos}}件</span> / 总计{{todos.length}}件</span>\n            <button\n                class=\"btn btn-warning\" (click)=\"onClearFinishedTodos()\">\n                清除已完成任务\n            </button>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pages/todos/todos.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/todos/todos.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTodosTodosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn {\n  display: inline-block;\n  padding: 5px 15px 4px 15px;\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 28px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: orange;\n  border: none;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: red;\n}\n\n.btn:focus {\n  outline: none;\n}\n\n/* app */\n\n.todo-container {\n  width: 800px;\n}\n\n.todo-container .todo-wrap {\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n\n.todo-container .todo-wrap .todo-header > input {\n  width: 761px;\n  height: 28px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px 7px;\n  outline: none;\n}\n\n.todo-container .todo-wrap .todo-header > input:focus {\n  outline: none;\n  border-color: rgba(255, 0, 0, 0.8);\n  box-shadow: inset 0 1px 1px rgba(255, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);\n}\n\n/* main ul li*/\n\n.todo-main {\n  margin-left: 0;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  padding: 0;\n}\n\n.todo-empty {\n  height: 40px;\n  line-height: 40px;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  padding-left: 5px;\n  margin-top: 10px;\n}\n\n/*item*/\n\nli {\n  list-style: none;\n  height: 42px;\n  line-height: 62px;\n  padding: 0 5px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nli label {\n  cursor: pointer;\n}\n\nli button.btn {\n  /*display: none;*/\n  display: inline-block;\n}\n\nli:before {\n  content: initial;\n}\n\nli:last-child {\n  border-bottom: none;\n}\n\n/*footer*/\n\n.todo-footer {\n  height: 40px;\n  line-height: 40px;\n  padding-left: 6px;\n  margin-top: 5px;\n}\n\n.todo-footer label {\n  display: inline-block;\n  margin-right: 20px;\n  cursor: pointer;\n}\n\n.todo-footer label input {\n  position: relative;\n  top: -1px;\n  vertical-align: middle;\n}\n\n.todo-footer button {\n  float: right;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9kb3MvRjpcXHdzNGlvbmljc1xcYmFzaWMtYW5ndWxhcjgtcXVpY2stc3RhcnQvc3JjXFxhcHBcXHBhZ2VzXFx0b2Rvc1xcdG9kb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7RUFDQSwwQkFBQTtFQUNHLGdCQUFBO0VBQ0EsZUFBQTtFQUNILGlCQUFBO0VBQ0csa0JBQUE7RUFDQSxzQkFBQTtFQUNILGVBQUE7RUFDRyxrQkFBQTtFQUNILGlGQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxXQUFBO0VBQ0csd0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDQyxXQUFBO0VBQ0cscUJBQUE7QUNHSjs7QUREQTtFQUNDLGFBQUE7QUNJRDs7QURGQSxRQUFBOztBQUNBO0VBQ0MsWUFBQTtBQ0tEOztBREhBO0VBQ0MsYUFBQTtFQUNHLHNCQUFBO0VBQ0gsa0JBQUE7QUNNRDs7QURKQTtFQUNDLFlBQUE7RUFDRyxZQUFBO0VBQ0EsZUFBQTtFQUNILHNCQUFBO0VBQ0csa0JBQUE7RUFDSCxnQkFBQTtFQUNHLGFBQUE7QUNPSjs7QURMQTtFQUNDLGFBQUE7RUFDRSxrQ0FBQTtFQUNBLGdGQUFBO0FDUUg7O0FETkEsY0FBQTs7QUFDQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1NKOztBRFBBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQSxPQUFBOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQ2FKOztBRFZBO0VBQ0ksZ0JBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0FDY0o7O0FEWkEsU0FBQTs7QUFDQTtFQUNJLFlBQUE7RUFBYSxpQkFBQTtFQUFtQixpQkFBQTtFQUFtQixlQUFBO0FDa0J2RDs7QURoQkE7RUFDSSxxQkFBQTtFQUF1QixrQkFBQTtFQUFvQixlQUFBO0FDcUIvQzs7QURuQkE7RUFDSSxrQkFBQTtFQUFvQixTQUFBO0VBQVcsc0JBQUE7QUN3Qm5DOztBRHRCQTtFQUNJLFlBQUE7RUFBYyxlQUFBO0FDMEJsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bntcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuXHRwYWRkaW5nOiA1cHggMTVweCA0cHggMTVweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwOyBcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHRsaW5lLWhlaWdodDogMjhweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLmJ0bi13YXJuaW5ne1xyXG5cdGNvbG9yOiAjZmZmOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYnRuLXdhcm5pbmc6aG92ZXJ7XHJcblx0Y29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLmJ0bjpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi8qIGFwcCAqL1xyXG4udG9kby1jb250YWluZXJ7XHJcblx0d2lkdGg6IDgwMHB4O1xyXG59XHJcbi50b2RvLWNvbnRhaW5lciAudG9kby13cmFwe1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udG9kby1jb250YWluZXIgLnRvZG8td3JhcCAudG9kby1oZWFkZXIgPiBpbnB1dHtcclxuXHR3aWR0aDogNzYxcHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRwYWRkaW5nOiA0cHggN3B4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4udG9kby1jb250YWluZXIgLnRvZG8td3JhcCAudG9kby1oZWFkZXIgPiBpbnB1dDpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG4gIFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcclxuICBcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDI1NSwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xyXG59XHJcbi8qIG1haW4gdWwgbGkqL1xyXG4udG9kby1tYWluIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLnRvZG8tZW1wdHkge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi8qaXRlbSovXHJcbmxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjJweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5saSBsYWJlbCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubGkgYnV0dG9uLmJ0biB7XHJcbiAgICAvKmRpc3BsYXk6IG5vbmU7Ki9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiBcclxufVxyXG5saTpiZWZvcmUge1xyXG4gICAgY29udGVudDogaW5pdGlhbDtcclxufVxyXG5saTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLypmb290ZXIqL1xyXG4udG9kby1mb290ZXIge1xyXG4gICAgaGVpZ2h0OiA0MHB4O2xpbmUtaGVpZ2h0OiA0MHB4OyBwYWRkaW5nLWxlZnQ6IDZweDsgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi50b2RvLWZvb3RlciBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbi1yaWdodDogMjBweDsgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50b2RvLWZvb3RlciBsYWJlbCBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTFweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4udG9kby1mb290ZXIgYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDsgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4iLCIuYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTVweCA0cHggMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uYnRuLXdhcm5pbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG4td2FybmluZzpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBhcHAgKi9cbi50b2RvLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MDBweDtcbn1cblxuLnRvZG8tY29udGFpbmVyIC50b2RvLXdyYXAge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50b2RvLWNvbnRhaW5lciAudG9kby13cmFwIC50b2RvLWhlYWRlciA+IGlucHV0IHtcbiAgd2lkdGg6IDc2MXB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHggN3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udG9kby1jb250YWluZXIgLnRvZG8td3JhcCAudG9kby1oZWFkZXIgPiBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDI1NSwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xufVxuXG4vKiBtYWluIHVsIGxpKi9cbi50b2RvLW1haW4ge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udG9kby1lbXB0eSB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi8qaXRlbSovXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5saSBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubGkgYnV0dG9uLmJ0biB7XG4gIC8qZGlzcGxheTogbm9uZTsqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGluaXRpYWw7XG59XG5cbmxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKmZvb3RlciovXG4udG9kby1mb290ZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udG9kby1mb290ZXIgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kby1mb290ZXIgbGFiZWwgaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRvZG8tZm9vdGVyIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/todos/todos.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/todos/todos.component.ts ***!
    \************************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppPagesTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/httpclient.service */
    "./src/app/services/httpclient.service.ts");

    var TodosComponent = /*#__PURE__*/function () {
      function TodosComponent(httpClientService) {
        _classCallCheck(this, TodosComponent);

        this.httpClientService = httpClientService;
        this.todo = {
          title: "",
          isFinished: false
        };
        this.todos = [];
        this.finishedCount = 0;
      }

      _createClass(TodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTodos();
        }
        /**
         * @Desc 查询数据
         */

      }, {
        key: "getTodos",
        value: function getTodos() {
          var _this = this;

          this.httpClientService.get("todo/getAllTodos").subscribe(function (res) {
            _this.todos = res;
            _this.finishedCount = 0;
            res.forEach(function (item) {
              if (item.isFinished) {
                _this.finishedCount++;
              }
            });
          }, function (error) {
            console.log(error);
          });
        }
        /**
         * @Desc 提交任务
         * @param evt
         */

      }, {
        key: "onKeydown",
        value: function onKeydown(evt) {
          var _this2 = this;

          if (evt.keyCode === 13) {
            if (!evt.target.value) {
              alert("输入的内容不能为空！");
            } else {
              this.todo.title = evt.target.value;
              this.todo.isFinished = false;
              this.httpClientService.post("todo/add", this.todo).subscribe(function (res) {
                if (res && res.id) {
                  _this2.getTodos();
                } else {
                  console.log("数据交互异常！");
                }
              });
            }
          }
        }
      }, {
        key: "onMouseOver",
        value: function onMouseOver(i, evt) {
          this.todos[i]["activate"] = true;
        }
      }, {
        key: "onMouseOut",
        value: function onMouseOut(i, evt) {
          this.todos[i]["activate"] = false;
        }
        /**
         * @Desc 切换任务是否完成状态
         * @param evt
         */

      }, {
        key: "onTodoStatusChange",
        value: function onTodoStatusChange(id, isFinished, evt) {
          var _this3 = this;

          this.httpClientService.post("todo/modify", {
            id: id,
            isFinished: isFinished
          }).subscribe(function (res) {
            if (res && res.id) {
              _this3.getTodos();
            } else {
              console.log("数据交互异常！");
            }
          });
        }
        /**
         * @desc 删除一条任务
         * @param id
         * @param evt
         */

      }, {
        key: "onRemoveTodoById",
        value: function onRemoveTodoById(id, evt) {
          var _this4 = this;

          this.httpClientService.get("todo/del?id=" + id).subscribe(function (res) {
            _this4.getTodos();
          });
        }
        /**
         * @desc 切换全选状态
         */

      }, {
        key: "onChangeSelectAllTodos",
        value: function onChangeSelectAllTodos(flag, evt) {
          var _this5 = this;

          console.log(flag);
          this.httpClientService.get("todo/changeAllStatus?flag=" + flag).subscribe(function () {
            _this5.getTodos();
          });
        }
        /**
         * @desc 清理已完成
         */

      }, {
        key: "onClearFinishedTodos",
        value: function onClearFinishedTodos() {
          var _this6 = this;

          /**
           *  清除已完成本来服务端使用一个delete from table where is_finished=1即可，这里咱乱写，
           *      咱用前端批量传递ids然后服务端批量接收数组参数
           */
          var ids = [];
          this.todos.forEach(function (item, index) {
            if (item.isFinished) {
              ids.push(item.id);
            }
          });
          this.httpClientService.post("todo/batchDeleteByIds", ids).subscribe(function (res) {
            _this6.getTodos();
          });
        }
      }]);

      return TodosComponent;
    }();

    TodosComponent.ctorParameters = function () {
      return [{
        type: src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]
      }];
    };

    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/todos/todos.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todos.component.scss */
      "./src/app/pages/todos/todos.component.scss"))["default"]]
    })], TodosComponent);
    /***/
  },

  /***/
  "./src/app/pages/todos/todos.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/todos/todos.module.ts ***!
    \*********************************************/

  /*! exports provided: TodosModule */

  /***/
  function srcAppPagesTodosTodosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosModule", function () {
      return TodosModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./todos.component */
    "./src/app/pages/todos/todos.component.ts");
    /* harmony import */


    var src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/httpclient.service */
    "./src/app/services/httpclient.service.ts");
    /**
     * 这个文件作为angular按需加载路由可以是标准写法，一个比较容易忘记的是declarations没有写，会导致路由行为很怪异
     */


    var TodosModule = /*#__PURE__*/_createClass(function TodosModule() {
      _classCallCheck(this, TodosModule);
    });

    TodosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: "",
        component: _todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"]
      }])],
      providers: [src_app_services_httpclient_service__WEBPACK_IMPORTED_MODULE_5__["HttpClientService"]]
    })], TodosModule);
    /***/
  }
}]);
//# sourceMappingURL=todos-todos-module-es5.js.map