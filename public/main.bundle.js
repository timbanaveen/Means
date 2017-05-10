webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articles_list_articles_list_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_articles_resolver_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_detail_article_detail_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_article_resolver_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'articles',
        component: __WEBPACK_IMPORTED_MODULE_2__articles_list_articles_list_component__["a" /* ArticlesListComponent */],
        resolve: {
            articles: __WEBPACK_IMPORTED_MODULE_3__services_articles_resolver_service__["a" /* ArticlesResolver */]
        }
    },
    {
        path: 'article/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__article_detail_article_detail_component__["a" /* ArticleDetailComponent */],
        resolve: {
            article: __WEBPACK_IMPORTED_MODULE_5__services_article_resolver_service__["a" /* ArticleResolver */]
        }
    },
    {
        path: '',
        redirectTo: '/articles',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_articles_resolver_service__["a" /* ArticlesResolver */],
            __WEBPACK_IMPORTED_MODULE_5__services_article_resolver_service__["a" /* ArticleResolver */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(178),
        styles: [__webpack_require__(168)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__article_detail_article_detail_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_articles_list_item_articles_list_item_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__articles_list_articles_list_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_articles_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_articles_resolver_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comments_list_comments_list_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_comments_list_item_comments_list_item_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_comments_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_tool_tip_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_action_tool_tip_action_tool_tip_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__linked_comment_linked_comment_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_article_detail_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_search_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__article_detail_article_detail_component__["a" /* ArticleDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_articles_list_item_articles_list_item_component__["a" /* ArticlesListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__articles_list_articles_list_component__["a" /* ArticlesListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__comments_list_comments_list_component__["a" /* CommentsListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shared_comments_list_item_comments_list_item_component__["a" /* CommentsListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_action_tool_tip_action_tool_tip_component__["a" /* ActionToolTipComponent */],
            __WEBPACK_IMPORTED_MODULE_17__linked_comment_linked_comment_component__["a" /* LinkedCommentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_articles_service__["a" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_11__services_articles_resolver_service__["a" /* ArticlesResolver */],
            __WEBPACK_IMPORTED_MODULE_14__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_15__services_tool_tip_service__["a" /* ToolTipService */],
            __WEBPACK_IMPORTED_MODULE_18__services_article_detail_service__["a" /* ArticleDetailService */],
            __WEBPACK_IMPORTED_MODULE_19__services_search_service__["a" /* SearchService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_commentType__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comments_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsListComponent = (function () {
    function CommentsListComponent(commentsService) {
        this.commentsService = commentsService;
        this.onCommentAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.commentText = "";
    }
    CommentsListComponent.prototype.ngOnInit = function () {
    };
    CommentsListComponent.prototype.getCommentItemModel = function (comment) {
        return this.commentsService.createCommentItemModel(comment);
    };
    CommentsListComponent.prototype.onTextAreaBlur = function () {
        this.showPublish = !!this.commentText.length;
    };
    CommentsListComponent.prototype.onPublishButtonClick = function () {
        var comment = {
            comment: this.commentText,
            type: __WEBPACK_IMPORTED_MODULE_1__constants_commentType__["a" /* CommentType */].TEXT
        };
        this.onCommentAdded.emit(comment);
        this.commentText = "";
        this.showPublish = false;
    };
    return CommentsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], CommentsListComponent.prototype, "comments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], CommentsListComponent.prototype, "onCommentAdded", void 0);
CommentsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-comments-list',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */]) === "function" && _a || Object])
], CommentsListComponent);

var _a;
//# sourceMappingURL=comments-list.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(searchService) {
        this.searchService = searchService;
        this.isExpanded = false;
        this.searchText = '';
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onSearchClick = function (event) {
        if (!this.isExpanded) {
            this.isExpanded = true;
            event.target.previousElementSibling.focus();
        }
    };
    HeaderComponent.prototype.onSearchBlur = function () {
        if (this.searchText.length === 0) {
            this.isExpanded = false;
        }
    };
    HeaderComponent.prototype.onSearchChange = function () {
        this.searchService.searchValueChanged(this.searchText);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_linkInfo_model__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_linkInfo_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_linkInfo_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_commentType__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_articles_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedCommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinkedCommentComponent = (function () {
    function LinkedCommentComponent(articleService) {
        this.articleService = articleService;
        this.isExpanded = true;
        this.commentSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.hideCommentView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    LinkedCommentComponent.prototype.ngOnInit = function () { };
    LinkedCommentComponent.prototype.onPublishClick = function () {
        var _this = this;
        var commentToSave = {
            comment: this.commentText,
            linkInfo: this.linkInfo,
            type: __WEBPACK_IMPORTED_MODULE_2__constants_commentType__["a" /* CommentType */].LINKED
        };
        this.articleService
            .addComment(commentToSave, this.articleService.getCurrentArticle()._id)
            .then(function (updatedComments) {
            // Inform Parent cmp about saved comment.
            _this.commentText = "";
            _this.commentSaved.emit(updatedComments);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    LinkedCommentComponent.prototype.onCloseClick = function () {
        this.hideCommentView.emit();
    };
    return LinkedCommentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], LinkedCommentComponent.prototype, "comments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_linkInfo_model__["LinkInfo"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_linkInfo_model__["LinkInfo"]) === "function" && _a || Object)
], LinkedCommentComponent.prototype, "linkInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], LinkedCommentComponent.prototype, "isExpanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], LinkedCommentComponent.prototype, "commentSaved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], LinkedCommentComponent.prototype, "hideCommentView", void 0);
LinkedCommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-linked-comment',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_articles_service__["a" /* ArticlesService */]) === "function" && _b || Object])
], LinkedCommentComponent);

var _a, _b;
//# sourceMappingURL=linked-comment.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

//# sourceMappingURL=article.model.js.map

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

//# sourceMappingURL=comment-item.model.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

//# sourceMappingURL=linkInfo.model.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleResolver = (function () {
    function ArticleResolver(articlesService, route) {
        this.articlesService = articlesService;
        this.route = route;
    }
    ArticleResolver.prototype.resolve = function (route, state) {
        return this.articlesService.getArticle(route.params.id)
            .then(function (article) { return article; });
    };
    return ArticleResolver;
}());
ArticleResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ArticleResolver);

var _a, _b;
//# sourceMappingURL=article-resolver.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tool_tip_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionToolTipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionToolTipComponent = (function () {
    function ActionToolTipComponent(toolTipService) {
        var _this = this;
        this.toolTipService = toolTipService;
        this.actions = [
            {
                iconName: 'create',
                name: 'comment'
            }
        ];
        toolTipService.showAt$.subscribe(function (coords) {
            _this.left = coords[0];
            _this.top = coords[1];
            _this.show = true;
        });
        toolTipService.hide$.subscribe(function () {
            _this.show = false;
        });
    }
    ActionToolTipComponent.prototype.ngOnInit = function () {
    };
    ActionToolTipComponent.prototype.onActionClick = function (action) {
        this.toolTipService.actionClicked(action);
    };
    return ActionToolTipComponent;
}());
ActionToolTipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-action-tool-tip',
        template: __webpack_require__(184),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tool_tip_service__["a" /* ToolTipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tool_tip_service__["a" /* ToolTipService */]) === "function" && _a || Object])
], ActionToolTipComponent);

var _a;
//# sourceMappingURL=action-tool-tip.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_article_model__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_article_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_article_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesListItemComponent = (function () {
    function ArticlesListItemComponent() {
    }
    ArticlesListItemComponent.prototype.ngOnInit = function () {
    };
    return ArticlesListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_article_model__["Article"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_article_model__["Article"]) === "function" && _a || Object)
], ArticlesListItemComponent.prototype, "article", void 0);
ArticlesListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-articles-list-item',
        template: __webpack_require__(185),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], ArticlesListItemComponent);

var _a;
//# sourceMappingURL=articles-list-item.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment_item_model__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_comment_item_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_comment_item_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsListItemComponent = (function () {
    function CommentsListItemComponent() {
    }
    CommentsListItemComponent.prototype.ngOnInit = function () {
    };
    return CommentsListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_comment_item_model__["CommentItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_comment_item_model__["CommentItem"]) === "function" && _a || Object)
], CommentsListItemComponent.prototype, "comment", void 0);
CommentsListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-comments-list-item',
        template: __webpack_require__(186),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], CommentsListItemComponent);

var _a;
//# sourceMappingURL=comments-list-item.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".article-detail-wrapper {\n  padding: 20px 20%; }\n  .article-detail-wrapper .article-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding-bottom: 10px; }\n    .article-detail-wrapper .article-header .account-image {\n      font-size: 45px; }\n    .article-detail-wrapper .article-header .author-info {\n      padding: 2px 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .article-detail-wrapper .article-header .author-info .author-name {\n        color: #673ab7; }\n      .article-detail-wrapper .article-header .author-info .created-on {\n        font-size: 14px;\n        margin-top: 3px; }\n  .article-detail-wrapper .article-content {\n    font-size: 1.2em;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n    .article-detail-wrapper .article-content .article-text {\n      position: relative; }\n      .article-detail-wrapper .article-content .article-text .comment-link {\n        position: absolute;\n        font-size: 1.4em;\n        top: 0;\n        right: -5%;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .article-detail-wrapper .article-content .article-text .comment-link:hover {\n          color: #673ab7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticlesService = (function () {
    function ArticlesService(http) {
        this.http = http;
        this.articlesUrl = 'http://localhost:3000/api/articles';
        this.articleUrl = 'http://localhost:3000/api/article';
        this.addCommentUrl = 'http://localhost:3000/api/comment/';
    }
    /**
     * Fetch all articles from Backend.
     */
    ArticlesService.prototype.getAllArticles = function () {
        return this.http.get(this.articlesUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Get article of given id fom backend.
     */
    ArticlesService.prototype.getArticle = function (articleId) {
        var _this = this;
        return this.http.get(this.articleUrl + "/" + articleId)
            .toPromise()
            .then(function (res) {
            var article = _this.extractData(res);
            _this.article = Object.assign({}, article[0]);
            return article;
        })
            .catch(this.handleError);
    };
    /**
     * Add Comment to given article.
     */
    ArticlesService.prototype.addComment = function (comment, articleId) {
        return this.http.post("" + this.addCommentUrl + articleId, comment)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    /**
     * Store current article for usage in comments.
     */
    ArticlesService.prototype.getCurrentArticle = function () {
        return this.article;
    };
    /**
     * Generic function to extract data from response.
     */
    ArticlesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    /**
     * Generic function to extract error from response.
     */
    ArticlesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ArticlesService);

var _a;
//# sourceMappingURL=articles.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".articles-list {\n  padding: 50px 10%;\n  text-align: center; }\n  .articles-list .list-item {\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    max-width: 800px;\n    margin: 20px 0;\n    list-style-type: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".comments-wrapper {\n  padding: 20px 15%; }\n  .comments-wrapper .comment-list-item {\n    list-style-type: none;\n    margin: 10px 0; }\n  .comments-wrapper .add-comment-textarea {\n    margin-bottom: 20px; }\n    .comments-wrapper .add-comment-textarea textarea {\n      display: block;\n      position: relative;\n      width: 98%;\n      border-radius: 2px;\n      border: 1px solid rgba(0, 0, 0, 0.2);\n      font-size: 16px;\n      font-family: 'Roboto', 'sans-serif';\n      z-index: 10;\n      resize: vertical; }\n    .comments-wrapper .add-comment-textarea .publish-button {\n      position: relative;\n      top: -30px;\n      z-index: 5; }\n      .comments-wrapper .add-comment-textarea .publish-button.show {\n        top: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".header {\n  position: fixed;\n  background-color: white;\n  width: 90%;\n  top: 0;\n  padding: 10px 5%;\n  box-shadow: 0 1px 1px gray;\n  z-index: 100; }\n  .header .header-text {\n    font-size: 22px;\n    text-decoration: none;\n    color: #555; }\n  .header .search-container {\n    display: inline-block;\n    float: right;\n    width: 28px;\n    border-radius: 3px;\n    transition: width 150ms;\n    border: 1px solid transparent;\n    border-radius: 3px; }\n    .header .search-container.expanded {\n      width: 250px;\n      border-color: #d1d7d9; }\n    .header .search-container .header-search-input {\n      width: calc(100% - 28px);\n      height: 24px;\n      border: none; }\n    .header .search-container .search-icon {\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@-webkit-keyframes popup {\n  from {\n    opacity: 1;\n    bottom: -50%; }\n  to {\n    opacity: 1;\n    bottom: 0%; } }\n\n@keyframes popup {\n  from {\n    opacity: 1;\n    bottom: -50%; }\n  to {\n    opacity: 1;\n    bottom: 0%; } }\n\n.linked-comment-wrapper {\n  position: fixed;\n  min-width: 267px;\n  bottom: 0;\n  right: 4px;\n  box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3);\n  z-index: 100;\n  background: #fff;\n  border-radius: 2px 2px 0 0;\n  -webkit-animation: popup 200ms ease-out 100ms;\n          animation: popup 200ms ease-out 100ms;\n  opacity: 0;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n  .linked-comment-wrapper .header {\n    padding: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n    .linked-comment-wrapper .header .close-icon {\n      float: right;\n      cursor: pointer; }\n  .linked-comment-wrapper .comment-area {\n    border: none;\n    resize: none;\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    color: #555;\n    padding: 5px;\n    display: block; }\n  .linked-comment-wrapper .publish-button {\n    margin: 5px; }\n  .linked-comment-wrapper .prev-comments {\n    padding: 0;\n    margin: 0; }\n    .linked-comment-wrapper .prev-comments .prev-linked-comment {\n      list-style-type: none; }\n      .linked-comment-wrapper .prev-comments .prev-linked-comment .comment-wrapper {\n        padding: 5px;\n        border: 1px solid rgba(0, 0, 0, 0.1);\n        border-left-width: 0;\n        border-right-width: 0; }\n        .linked-comment-wrapper .prev-comments .prev-linked-comment .comment-wrapper .comment-header {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          margin-bottom: 10px; }\n          .linked-comment-wrapper .prev-comments .prev-linked-comment .comment-wrapper .comment-header .author-name {\n            margin-left: 5px;\n            margin-top: 2px;\n            color: #673ab7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".tooltip-wrapper {\n  position: fixed;\n  display: inline-block;\n  visibility: hidden;\n  background-color: #222;\n  padding: 7px 15px;\n  border-radius: 2px;\n  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  -webkit-transform: rotateX(40deg);\n          transform: rotateX(40deg);\n  transition: -webkit-transform 150ms;\n  transition: transform 150ms;\n  transition: transform 150ms, -webkit-transform 150ms;\n  -webkit-transform-origin: bottom;\n          transform-origin: bottom; }\n  .tooltip-wrapper.show {\n    visibility: visible;\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    -webkit-animation: pop-upwards 180ms forwards linear;\n            animation: pop-upwards 180ms forwards linear; }\n  .tooltip-wrapper .material-icons {\n    cursor: pointer;\n    color: #eee; }\n    .tooltip-wrapper .material-icons:hover {\n      color: #aaa; }\n  .tooltip-wrapper .tooltip-anchor {\n    border: 7px solid transparent;\n    border-top-color: #222;\n    position: absolute;\n    top: 38px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".article-item-wrapper {\n  padding: 15px;\n  border-radius: 2px;\n  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.3);\n  text-align: left;\n  transition: box-shadow 300ms; }\n  .article-item-wrapper:hover {\n    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.3); }\n  .article-item-wrapper .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .article-item-wrapper .header .account-image {\n      font-size: 45px; }\n    .article-item-wrapper .header .author-info {\n      padding: 2px 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .article-item-wrapper .header .author-info .author-name {\n        color: #673ab7; }\n      .article-item-wrapper .header .author-info .created-on {\n        font-size: 14px;\n        margin-top: 3px; }\n  .article-item-wrapper .content-wrapper {\n    text-decoration: none;\n    color: inherit;\n    cursor: pointer; }\n  .article-item-wrapper .footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-top: 20px;\n    padding-top: 10px; }\n    .article-item-wrapper .footer .favorite-count {\n      padding-left: 10px; }\n    .article-item-wrapper .footer .comment-count {\n      padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".comment-item-wrapper {\n  padding: 10px 15px;\n  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5); }\n  .comment-item-wrapper .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 10px; }\n    .comment-item-wrapper .header .account-image {\n      font-size: 35px; }\n    .comment-item-wrapper .header .author-name {\n      padding: 5px;\n      color: #673ab7; }\n  .comment-item-wrapper .content-wrapper .comment-link {\n    display: block;\n    cursor: pointer;\n    color: inherit;\n    text-decoration: none;\n    margin: 20px 0;\n    border-radius: 2px;\n    background-color: rgba(255, 255, 0, 0.35);\n    padding: 5px; }\n  .comment-item-wrapper .content-wrapper .comment-text {\n    margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- Routed comps will be rendered here -->"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"article-detail-wrapper\">\n  <div class=\"article-header\">\n    <i class=\"material-icons account-image\">account_circle</i>\n    <div class=\"author-info\">\n      <div class=\"author-name\">{{article.author}}</div>\n      <div class=\"created-on\">{{article.createdOn | date}}</div>\n    </div>\n  </div>\n\n  <!-- Content of article -->\n  <div class=\"article-content\">\n    <h2>{{article.title}}</h2>\n    <div \n      class=\"article-text\"\n      *ngFor=\"let para of article.content; let idx = index\" >\n      <span\n        *ngIf=\"isLinkedPara(idx)\" \n        class=\"comment-link\"\n        (click)=\"onCommentLinkClick(idx)\" >\n        *\n      </span>\n      <p \n        id=\"pl{{idx}}\"\n        [innerHTML]=\"para\"\n        (mousedown)=\"onParaMouseDown($event, idx)\" ></p>\n    </div>\n  </div>\n\n  <!-- Comments -->\n  <app-comments-list\n    [comments]=\"article.comments\"\n    (onCommentAdded)=\"addComment($event)\" >\n  </app-comments-list>\n\n  <!-- Linked Comments Section -->\n  <app-linked-comment\n    [comments]=\"currentParaComments\"\n    [isExpanded]=\"isLinkedCommentExpanded\"\n    [linkInfo]=\"linkInfo\"\n    (commentSaved)=\"linkedCommentSaved($event)\"\n    (hideCommentView)=\"hideCommentPopUp()\" >\n  </app-linked-comment>\n</div>\n<!-- Tooltip actions -->\n<app-action-tool-tip\n  (onAction)=\"onToolTipAction()\" >\n</app-action-tool-tip>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ul class=\"articles-list\">\n  <li class=\"list-item\"\n    *ngFor=\"let article of articles\" >\n    <app-articles-list-item\n      [article]=\"article\" >\n    </app-articles-list-item>\n  </li>\n</ul>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<h3>Comments</h3>\n<ul class=\"comments-wrapper\">\n  <li class=\"add-comment-textarea comment-list-item\">\n    <textarea \n      cols=\"30\" \n      rows=\"5\"\n      placeholder=\"Please enter comment\"\n      (focus)=\"showPublish=true\"\n      (blur)=\"onTextAreaBlur()\"\n      [(ngModel)]=\"commentText\" ></textarea>\n      <button\n        [ngClass]='{\"primary-button\": true, \"publish-button\":true, \"show\":showPublish}'\n        (click)=\"onPublishButtonClick()\" >\n        Publish  \n      </button>\n  </li>\n  <li\n    class=\"comment-list-item\"\n    *ngFor=\"let comment of comments\" >\n    <app-comments-list-item\n      [comment]=\"getCommentItemModel(comment)\" ></app-comments-list-item>\n  </li>\n</ul>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a routerLink=\"/articles\" class=\"header-text\">Means</a>\n  <div \n    [style.width]=\"width+'px'\"\n    [ngClass]=\"{ 'search-container': true, 'expanded': isExpanded }\"\n    (click)=\"onSearchClick($event)\" >\n    <input type=\"text\"\n      class=\"header-search-input\"\n      (blur)=\"onSearchBlur()\"\n      [(ngModel)]=\"searchText\"\n      (input)=\"onSearchChange()\" >\n    <i class=\"material-icons search-icon\">search</i>\n  </div>\n</div>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf=\"isExpanded\"\n  class=\"linked-comment-wrapper\">\n  <div class=\"header\">Comment\n    <i \n      class=\"material-icons close-icon\"\n      (click)=\"onCloseClick()\" >close</i>\n  </div>\n  <!-- Comment Input -->\n  <div\n    *ngIf=\"linkInfo\"\n    class=\"comment-input\">\n    <textarea \n      cols=\"30\" \n      rows=\"10\" \n      class=\"comment-area\"\n      placeholder=\"Please Enter Comment\"\n      [(ngModel)]=\"commentText\" ></textarea>\n    <button\n      class=\"primary-button publish-button\"\n      (click)=\"onPublishClick()\" >Publish</button>\n  </div>\n\n  <!-- List of previous comments -->\n  <ul class=\"prev-comments\">\n    <li \n      *ngFor=\"let comment of comments\"\n      class=\"prev-linked-comment\" >\n      <div class=\"comment-wrapper\">\n        <div class=\"comment-header\">\n          <i class=\"material-icons account-image\">account_circle</i>\n          <div class=\"author-name\">{{comment.author}}</div>\n        </div>\n        <div class=\"comment-text\">{{comment.commentText}}</div>\n      </div> \n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div \n  [ngClass]=\"{'tooltip-wrapper': true, 'show': show}\"\n  [style.top.px]=\"top\"\n  [style.left.px]=\"left\" >\n  <div \n    class=\"tooltip-actions\"\n    *ngFor=\"let action of actions\"\n    (click)=\"onActionClick(action)\" >\n    <i class=\"material-icons\">{{action.iconName}}</i>\n  </div>\n  <div class=\"tooltip-anchor\"></div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"article-item-wrapper\">\n  <div class=\"header\">\n    <i class=\"material-icons account-image\">account_circle</i>\n    <div class=\"author-info\">\n      <div class=\"author-name\">{{article.author}}</div>\n      <div class=\"created-on\">{{article.createdOn | date}}</div>\n    </div>\n  </div>\n  <a \n    class=\"content-wrapper\"\n    routerLink=\"/article/{{article._id}}\" >\n    <h2>{{article.title}}</h2>\n    <span>{{article.content[0]}}</span>\n  </a>\n  <div class=\"footer\">\n    <div class=\"favorite-wrapper\">\n      <i class=\"material-icons\">favorite_border</i>\n      <span class=\"favorite-count\">{{article.likes}}</span>\n    </div>\n    <div class=\"comment-wrapper\">\n      <span class=\"comment-count\">{{article.comments.length}}</span>\n      <i class=\"material-icons\">comment</i>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-item-wrapper\">\n  <div class=\"header\">\n    <i class=\"material-icons account-image\">account_circle</i>\n    <div class=\"author-name\">{{comment.author}}</div>\n  </div>\n  <div class=\"content-wrapper\">\n    <a \n      class=\"comment-link\"\n      href=\"{{comment.linkUrl}}\"\n      *ngIf=\"comment.linkText\">{{comment.linkText}}</a>\n    <div class=\"comment-text\">{{comment.commentText}}</div>\n  </div>\n</div>"

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService() {
        this.searchValueChangeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.searchValueChange$ = this.searchValueChangeSource.asObservable();
    }
    SearchService.prototype.searchValueChanged = function (value) {
        this.searchValueChangeSource.next(value);
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SearchService);

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolTipService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolTipService = (function () {
    function ToolTipService() {
        this.showAtSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.hideSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.actionClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.showAt$ = this.showAtSource.asObservable();
        this.hide$ = this.hideSource.asObservable();
        this.actionClicked$ = this.actionClickedSource.asObservable();
    }
    ToolTipService.prototype.showAt = function (coords) {
        this.showAtSource.next(coords);
    };
    ToolTipService.prototype.hide = function () {
        this.hideSource.next();
    };
    ToolTipService.prototype.actionClicked = function (action) {
        this.actionClickedSource.next(action);
    };
    return ToolTipService;
}());
ToolTipService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ToolTipService);

//# sourceMappingURL=tool-tip.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_articles_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tool_tip_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_article_detail_service__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(route, router, articleService, toolTipService, articleDetailService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.articleService = articleService;
        this.toolTipService = toolTipService;
        this.articleDetailService = articleDetailService;
        // https://github.com/angular/angular/issues/6595
        // TODO: remove this when above issue is resolved.
        router.events.subscribe(function (s) {
            if (s instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(element);
                    }
                }
                // adding event to handle showing and hiding tooltip on text selection.
                _this.addTextSelectionEvent();
            }
        });
        // Subsribe to action events of tooltip.
        toolTipService.actionClicked$.subscribe(function (action) {
            _this.onToolTipAction(action);
        });
    }
    /**
     * Get article detail from resolved route.
     */
    ArticleDetailComponent.prototype.ngOnInit = function () {
        this.article = this.route.snapshot.data.article[0];
    };
    /**
     * Add comment in current article. Network related tasks is handled by service.
     */
    ArticleDetailComponent.prototype.addComment = function (comment) {
        var _this = this;
        this.articleService
            .addComment(comment, this.article._id)
            .then(function (comments) {
            _this.article.comments = comments;
            setTimeout(function () {
                document.body.scrollTop = document.body.scrollHeight;
            }, 100);
        }); // TODO: show message on error
    };
    /**
     * Check if current paragraph have any comments.
     */
    ArticleDetailComponent.prototype.isLinkedPara = function (paraIdx) {
        return this.articleDetailService
            .getParaComments(this.article, paraIdx).length > 0;
    };
    /**
     * Handle click event on link provided for comments besides paragraph.
     */
    ArticleDetailComponent.prototype.onCommentLinkClick = function (paraIdx) {
        this.currentParaComments = this.getParaCommentItems(paraIdx);
        this.isLinkedCommentExpanded = true;
        this.linkInfo = null;
    };
    ArticleDetailComponent.prototype.linkedCommentSaved = function (comments) {
        this.article.comments = comments;
        this.hideCommentPopUp();
    };
    ArticleDetailComponent.prototype.hideCommentPopUp = function () {
        this.isLinkedCommentExpanded = false;
        this.articleDetailService.unHighlightArticle(this.article);
    };
    /**
     * Handle tooltip actions.
     */
    ArticleDetailComponent.prototype.onToolTipAction = function (action) {
        // If more than one actions, use enum
        if (action.name === 'comment') {
            this.linkInfo = this.articleDetailService.extractLinkInfo(this.article, this.selectionInfo);
            this.currentParaComments = this.getParaCommentItems(this.selectionInfo.fromPara);
            this.isLinkedCommentExpanded = true;
            // highlight actions
            this.articleDetailService.highlightSelection(this.article, this.selectionInfo);
        }
    };
    ArticleDetailComponent.prototype.getParaCommentItems = function (paraIdx) {
        var paraComments = this.articleDetailService.getParaComments(this.article, paraIdx);
        return paraComments.map(function (comment) {
            var commentItem = {
                author: 'Anonymous',
                commentText: comment.comment
            };
            return commentItem;
        });
    };
    /**
     * Add event which will get current selected text from document.
     */
    ArticleDetailComponent.prototype.addTextSelectionEvent = function () {
        var _this = this;
        document.addEventListener('mouseup', function (event) {
            var selectedText = window.getSelection().toString();
            if (selectedText
                && selectedText.length
                && event.target.id.startsWith('pl')) {
                setTimeout(function () {
                    var selection = window.getSelection();
                    var newSelection = selection.toString();
                    if (newSelection === selectedText) {
                        _this.selectionInfo = _this.articleDetailService.getSelectionInfo(selection);
                        _this.toolTipService.showAt([event.x - 27, event.y - 58]);
                    }
                }, 100);
            }
        });
        document.addEventListener('click', function (event) {
            _this.toolTipService.hide();
        });
    };
    ArticleDetailComponent.prototype.onParaMouseDown = function (event, paraIdx) {
        this.hideCommentPopUp();
    };
    return ArticleDetailComponent;
}());
ArticleDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-article-detail',
        template: __webpack_require__(179),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_articles_service__["a" /* ArticlesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_tool_tip_service__["a" /* ToolTipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tool_tip_service__["a" /* ToolTipService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_article_detail_service__["a" /* ArticleDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_article_detail_service__["a" /* ArticleDetailService */]) === "function" && _e || Object])
], ArticleDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=article-detail.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesListComponent = (function () {
    function ArticlesListComponent(route, searchService) {
        var _this = this;
        this.route = route;
        this.searchService = searchService;
        searchService.searchValueChange$
            .debounceTime(300)
            .subscribe(function (serachValue) {
            _this.filterArticles(serachValue);
        });
    }
    ArticlesListComponent.prototype.ngOnInit = function () {
        this.originalArticles = this.articles = this.route.snapshot.data.articles;
    };
    ArticlesListComponent.prototype.filterArticles = function (searchValue) {
        var searchValueLc = searchValue.toLowerCase();
        this.articles = this.originalArticles
            .filter(function (article) {
            return (article.author.toLowerCase().includes(searchValueLc)
                || article.title.toLowerCase().includes(searchValueLc)
                || article.content[0].toLowerCase().includes(searchValueLc));
        });
    };
    return ArticlesListComponent;
}());
ArticlesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-articles-list',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */]) === "function" && _b || Object])
], ArticlesListComponent);

var _a, _b;
//# sourceMappingURL=articles-list.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentType; });
var CommentType;
(function (CommentType) {
    CommentType[CommentType["TEXT"] = 1] = "TEXT";
    CommentType[CommentType["LINKED"] = 2] = "LINKED";
})(CommentType || (CommentType = {}));
//# sourceMappingURL=commentType.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleDetailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleDetailService = (function () {
    function ArticleDetailService() {
    }
    /**
     * Get all comments which belongs to current paragraph.
     */
    ArticleDetailService.prototype.getParaComments = function (article, paraIdx) {
        var curentTextRange = this.getArticleTextRanges(article)[paraIdx];
        return article.comments.filter(function (comment) {
            return (comment.linkInfo
                && comment.linkInfo.index >= curentTextRange[0]
                && comment.linkInfo.index <= curentTextRange[1]);
        });
    };
    /**
     * Extracts LinkInfo, from given params.
     * It is considered that fromPara <= toPara
     */
    ArticleDetailService.prototype.extractLinkInfo = function (article, selectionInfo) {
        var fromPara = selectionInfo.fromPara, fromOffset = selectionInfo.fromOffset, toPara = selectionInfo.toPara, toOffset = selectionInfo.toOffset;
        var textRanges = this.getArticleTextRanges(article);
        var linkInfo = {
            index: textRanges[fromPara][0] + fromOffset,
            length: fromPara === toPara ?
                toOffset - fromOffset :
                textRanges[toPara][0] - textRanges[fromPara][0] + toOffset - fromOffset
        };
        return linkInfo;
    };
    /**
     * Get selection information.
     */
    ArticleDetailService.prototype.getSelectionInfo = function (selection) {
        var anchorNode = selection.anchorNode;
        var focusNode = selection.focusNode;
        var anchorParaIdx = parseInt(anchorNode.parentNode.id.split('pl')[1]);
        var focusParaIdx = parseInt(focusNode.parentNode.id.split('pl')[1]);
        var fromPara;
        var fromOffset;
        var toPara;
        var toOffset;
        if (anchorParaIdx === focusParaIdx) {
            fromPara = toPara = anchorParaIdx;
            fromOffset = selection.anchorOffset;
            toOffset = selection.focusOffset;
        }
        else if (anchorParaIdx < focusParaIdx) {
            fromPara = anchorParaIdx;
            toPara = focusParaIdx;
            fromOffset = selection.anchorOffset;
            toOffset = selection.focusOffset;
        }
        else {
            fromPara = focusParaIdx;
            toPara = anchorParaIdx;
            fromOffset = selection.focusOffset;
            toOffset = selection.anchorOffset;
        }
        var selectionInfo = {
            fromPara: fromPara,
            fromOffset: fromOffset,
            toPara: toPara,
            toOffset: toOffset
        };
        return selectionInfo;
    };
    /**
     * wraps select text by highlighter.
     */
    ArticleDetailService.prototype.highlightSelection = function (article, selectionInfo) {
        var highlightEl = '<span class="text-highlighter"';
        var highlightElClose = '</span>';
        var fromPara = selectionInfo.fromPara, fromOffset = selectionInfo.fromOffset, toPara = selectionInfo.toPara, toOffset = selectionInfo.toOffset;
        if (fromPara === toPara) {
            var currentPara = article.content[fromPara];
            article.content[fromPara] = currentPara.substr(0, fromOffset) +
                (highlightEl + ">" + currentPara.substr(fromOffset, toOffset - fromOffset) + highlightElClose) +
                currentPara.substr(toOffset);
        }
        else {
            var fromParaText = article.content[fromPara];
            article.content[fromPara] = fromParaText.substr(0, fromOffset) +
                (highlightEl + ">" + fromParaText.substr(fromOffset) + highlightElClose);
            for (var i = fromPara + 1; i < toPara; i++) {
                article.content[i] = "" + highlightEl + article.content[i] + highlightElClose;
            }
            var toParaText = article.content[toPara];
            article.content[toPara] = highlightEl + ">" + toParaText.substr(0, toOffset) + highlightElClose +
                toParaText.substr(toOffset);
        }
    };
    /**
     * Removes all highlights from article.
     */
    ArticleDetailService.prototype.unHighlightArticle = function (article) {
        var highlightElRe = /<span class="text-highlighter">([\s\S]*)<\/span>/g;
        var paras = article.content;
        paras = paras.map(function (para) {
            return para.replace(highlightElRe, '$1');
        });
        article.content = paras;
    };
    ArticleDetailService.prototype.getArticleTextRanges = function (article) {
        var articleParas = article.content;
        var prevIndex = 0;
        var textRanges = articleParas.map(function (para) {
            var from = prevIndex;
            var to = prevIndex + para.length - 1;
            prevIndex = to + 1;
            return [from, to];
        }); // should cache / pre-compute this as it will remain same per article.
        return textRanges;
    };
    return ArticleDetailService;
}());
ArticleDetailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ArticleDetailService);

//# sourceMappingURL=article-detail.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articles_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesResolver = (function () {
    function ArticlesResolver(articlesService, router) {
        this.articlesService = articlesService;
        this.router = router;
    }
    ArticlesResolver.prototype.resolve = function (route, state) {
        return this.articlesService.getAllArticles()
            .then(function (articles) { return articles; });
    };
    return ArticlesResolver;
}());
ArticlesResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__articles_service__["a" /* ArticlesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ArticlesResolver);

var _a, _b;
//# sourceMappingURL=articles-resolver.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentsService = (function () {
    function CommentsService(articlesService) {
        this.articlesService = articlesService;
    }
    /**
     * Converts API based model to UI model, which is used for rendering comments.
     */
    CommentsService.prototype.createCommentItemModel = function (comment) {
        var commentItem = {
            author: 'Anonymous',
            commentText: comment.comment,
        };
        if (comment.linkInfo) {
            var linkInfo = comment.linkInfo;
            var article = this.articlesService.getCurrentArticle();
            var articleText = article.content.join('');
            commentItem.linkText = articleText.substr(linkInfo.index, linkInfo.length);
            commentItem.linkUrl = window.location.href.substr(0, window.location.href.length - window.location.hash.length) +
                '#pl' +
                this.getParaIndex(linkInfo.index);
        }
        return commentItem;
    };
    /**
     * Gets paragraph index from index of text.
     *
     * Uses linear search, but binary search can also be used.
     */
    CommentsService.prototype.getParaIndex = function (linkIdx) {
        var paras = this.articlesService.getCurrentArticle().content;
        var index = 0;
        var lastParaIndex = 0;
        for (var i = 0; i < paras.length; i++) {
            var currentParaIndex = paras[i].length + lastParaIndex - 1;
            if (linkIdx > lastParaIndex
                && linkIdx <= currentParaIndex) {
                return i;
            }
            else {
                lastParaIndex = currentParaIndex;
            }
        }
        return index;
    };
    return CommentsService;
}());
CommentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__articles_service__["a" /* ArticlesService */]) === "function" && _a || Object])
], CommentsService);

var _a;
//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 94;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[226]);
//# sourceMappingURL=main.bundle.js.map