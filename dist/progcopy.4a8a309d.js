// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"progcopy.js":[function(require,module,exports) {
var tovar1 = {
  tname: "CPU",
  tcode: 123,
  tprice: 5000,
  timg: "Photo\cpu.jpg",
  kilk: 0
};
var tovar2 = {
  tname: "GPU",
  tcode: 456,
  tprice: 20000,
  timg: "Photo\gpu.jpg",
  kilk: 0
};
var tovar3 = {
  tname: "SSD",
  tcode: 789,
  tprice: 7000,
  timg: "Photo\ssd.jpg",
  kilk: 0
}; //сума заказу

function calcPrice() {
  // шукаємо обєкт в корзині
  var totalPrice = 0;
  var cartItems = document.querySelectorAll('.cart-item');
  var pushPrice = document.querySelector('.summ');
  var pushPrice2 = document.querySelector('.prise');
  cartItems.forEach(function (item) {
    var amountEL = item.querySelector('[data-counter]');
    var priceEL = item.querySelector('.price');
    var currentPrice = parseInt(amountEL.innerText) * parseInt(priceEL.innerText);
    totalPrice += currentPrice;
  });
  pushPrice.innerText = totalPrice;
  pushPrice2.innerText = totalPrice;
}

var cartWraper = document.querySelector('.cart-wraper');
window.addEventListener('click', function (event) {
  // перевіряємо чи обєкт це кнопка +
  if (event.target.dataset.action === "plus") {
    var counterWraper = event.target.closest('.container');
    var counter2 = counterWraper.querySelector('[data-counter]');
    counter2.innerText = ++counter2.innerText;
    calcPrice();
  } // перевіряємо чи обєкт це кнопка -


  if (event.target.dataset.action === "minus") {
    var _counterWraper = event.target.closest('.container');

    var _counter = _counterWraper.querySelector('[data-counter]');

    if (parseInt(_counter.innerText) > 1) {
      _counter.innerText = --_counter.innerText;
      calcPrice();
    } //перевірка на товар який в корзині
    else if (event.target.closest('.cart-wraper') && parseInt(_counter.innerText) === 1) {
      //Видаляємо товар з корзини
      //            event.target.closest('.haha2').remove();
      event.target.closest('.cart-item').remove();
    }
  }
});
window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-add')) {
    var card = event.target.closest('.card');
    var productInfo = {
      imgSrc: card.querySelector('.gphoto').getAttribute('src'),
      title: card.querySelector('.title').innerText,
      price: card.querySelector('.price').innerText,
      counter: card.querySelector('[data-counter]').innerText,
      id: card.dataset.id
    };
    var itemInCart = cartWraper.querySelector("[data-id=\"".concat(productInfo.id, "\"]"));

    if (itemInCart) {
      var conterelement = itemInCart.querySelector('[data-counter]');
      conterelement.innerText = parseInt(conterelement.innerText) + parseInt(productInfo.counter);
    } else {
      var cartItemHTML = "<div class=\"corz cart-item\" data-id=\"".concat(productInfo.id, "\">\n        <div ><img class=\"gphoto\" src=\"").concat(productInfo.imgSrc, "\" alt=\"photo\"></div>\n        <div class=\"title\">").concat(productInfo.title, "</div>\n        <div class=\"container\">\n            <div><h3>\u0426\u0456\u043D\u0430:</h3></div>\n            <div><h3 class=\"price\">").concat(productInfo.price, "</h3></div>\n            <div><h3>\u0433\u0440\u043D.</h3></div>\n        </div>\n        <div class=\"container\">\n            <div><button type=\"button\" class=\"knop\" data-action=\"minus\">-</button></div>\n            <div data-counter>").concat(productInfo.counter, "</div>\n            <div><button type=\"button\" class=\"knop\" data-action=\"plus\">+</button></div>\n        </div>\n    </div>");
      cartWraper.insertAdjacentHTML("beforeend", cartItemHTML);
    } // скидаємо щотчик на 1


    card.querySelector('[data-counter]').innerText = 1;
    calcPrice();
  } //const kilk =card.querySelector('[data-counter]').innerText
  //const summ = document.querySelector('.summ').innerText;
  //summ= parseInt(summ)+ parseInt(productInfo.price)*parseInt(kilk ) 

});
var btnoform = document.querySelector('.oform');
btnoform.addEventListener('click', function () {
  var nom = document.querySelector('.phone').value;
  alert("\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D: ".concat(nom));
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51482" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","progcopy.js"], null)
//# sourceMappingURL=/progcopy.4a8a309d.js.map