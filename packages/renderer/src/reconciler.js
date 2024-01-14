import ReactReconciler from "react-reconciler";
import { DefaultEventPriority } from "react-reconciler/cjs/react-reconciler-constants.production.min.js";
import createElement from "./createElement.js";
import { version } from "../package.json";

const HostConfig = {
  noTimeout: -1,
  isPrimaryRenderer: true,
  supportsMutation: false,
  supportsPersistence: true,
  supportsHydration: false,

  // -------------------
  //      Core
  // -------------------

  detachDeletedInstance: (node) => {},
  commitMount: function (instance, _type, _newProps) {
    instance.commitMount();
  },

  createInstance: function (type, props, _rootContainerInstance, _hostContext) {
    return createElement(type, props);
  },

  appendInitialChild: function (parentInstance, child) {
    parentInstance.appendChild(child);
  },
  finalizeInitialChildren: function (
    _parentInstance,
    _type,
    _props,
    _rootContainerInstance,
    _hostContext,
  ) {
    return true;
  },
  createTextInstance: function (text, _rootContainerInstance, _hostContext) {
    return "label...";
  },
  getPublicInstance: function (instance) {
    return instance;
  },
  prepareForCommit: function (_containerInfo) {
    return null;
  },
  prepareUpdate: function (
    _instance,
    _type,
    _oldProps,
    _newProps,
    _rootContainerInstance,
    _hostContext,
  ) {
    return true;
  },
  resetAfterCommit: function (_containerInfo) {},
  shouldSetTextContent: function (_type, props) {
    if (typeof props.children === "string") return true;
    return false;
  },
  getRootHostContext: function (_rootContainerInstance) {
    return {};
  },
  getChildHostContext: function (
    _parentHostContext,
    _type,
    _rootContainerInstance,
  ) {
    return {};
  },

  scheduleTimeout: function (handler, timeout) {
    return setTimeout(handler, timeout);
  },
  cancelTimeout: function (handle) {
    return clearTimeout(handle);
  },
  preparePortalMount: function () {},

  getCurrentEventPriority: function () {
    return DefaultEventPriority;
  },
  getInstanceFromNode: function (_node) {
    return null;
  },
  getInstanceFromScope: function (scopeInstance) {
    return null;
  },

  // -------------------
  //     Persistence
  //     (optional)
  // -------------------

  cloneInstance: function (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    internalInstanceHandle,
    keepChildren,
    recyclableInstance,
  ) {
    const element = createElement(type, newProps);

    const newChildren = keepChildren ? newProps : [];

    element.children = newChildren;

    return element;
  },

  createContainerChildSet: function (...args) {
    return [];
  },

  appendChildToContainerChildSet: function (childSet, child) {
    childSet.push(child);
  },

  finalizeContainerChildren: function (container, newChildren) {
    container.args = newChildren;
    container.onUpdate(newChildren.map((child) => child.ast));
  },

  replaceContainerChildren: function (container, newChildren) {
    // Noop - children will be replaced in finalizeContainerChildren
  },

  // -------------------
  //      Microtasks
  //     (optional)
  // -------------------

  scheduleMicrotask: function (callback) {
    queueMicrotask(callback);
  },
};

const ReconcilerNew = ReactReconciler(HostConfig);

ReconcilerNew.injectIntoDevTools({
  bundleType: import.meta.env.DEV ? 1 : 0,
  rendererPackageName: "react-shader-fiber",
  version,
});

export default ReconcilerNew;
