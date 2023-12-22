import ReactReconciler from "react-reconciler";
import { DefaultEventPriority } from "react-reconciler/cjs/react-reconciler-constants.production.min.js";
import createElement from "./createElement.js";

const HostConfig = {
  noTimeout: -1,
  isPrimaryRenderer: true,
  supportsMutation: false,
  supportsPersistence: true,
  supportsHydration: false,
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

    const newChildren = keepChildren ? newProps : undefined;

    element.children = newChildren;
    return element;
  },
  createInstance: function (type, props, _rootContainerInstance, _hostContext) {
    return createElement(type, props);
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
  replaceContainerChildren: function (...args) {},
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
  resetTextContent: function (_instance) {},
  commitTextUpdate: function (_textInstance, _oldText, _newText) {
    throw new Error("commitTextUpdate should not be called");
  },
  removeChild: function (parentInstance, child) {
    // parentInstance.removeChild(child);
  },
  removeChildFromContainer: function (_container, _child) {},
  insertBefore: function (_parentInstance, _child, _beforeChild) {},
  appendChildToContainer: function (container, child) {
    container.appendChild(child);
  },
  appendChild: function (parentInstance, child) {
    parentInstance.appendChild(child);
  },
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
  commitUpdate: function (
    instance,
    _updatePayload,
    _type,
    _oldProps,
    newProps,
  ) {},
  commitMount: function (instance, _type, _newProps) {
    instance.commitMount();
  },
  scheduleTimeout: function (handler, timeout) {
    return setTimeout(handler, timeout);
  },
  cancelTimeout: function (handle) {
    return clearTimeout(handle);
  },
  preparePortalMount: function () {},
  scheduleMicrotask: function (callback) {
    queueMicrotask(callback);
  },
  clearContainer: function (_container) {},
  getCurrentEventPriority: function () {
    return DefaultEventPriority;
  },
  getInstanceFromNode: function (_node) {
    return null;
  },
  getInstanceFromScope: function (scopeInstance) {
    // if (scopeInstance.node) {
    //     return scopeInstance;
    // }
    return null;
  },
  beforeActiveInstanceBlur: function () {},
  afterActiveInstanceBlur: function () {},
  prepareScopeUpdate: function (_scopeInstance, _instance) {},
  detachDeletedInstance: function (_node) {},
};

const Reconciler = ReactReconciler(HostConfig);

export default Reconciler;
