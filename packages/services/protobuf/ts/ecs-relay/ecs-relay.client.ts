/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter eslint_disable
// @generated from protobuf file "ecs-relay.proto" (package "ecsrelay", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ECSRelayService } from "./ecs-relay";
import type { PushResponse } from "./ecs-relay";
import type { PushRequest } from "./ecs-relay";
import type { Message } from "./ecs-relay";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { Subscription } from "./ecs-relay";
import type { SubscriptionRequest } from "./ecs-relay";
import type { CountIdentitiesResponse } from "./ecs-relay";
import type { CountIdentitiesRequest } from "./ecs-relay";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Identity } from "./ecs-relay";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The Relay Service definition.
 *
 * @generated from protobuf service ecsrelay.ECSRelayService
 */
export interface IECSRelayServiceClient {
  /**
   * @generated from protobuf rpc: Authenticate(ecsrelay.Identity) returns (ecsrelay.Identity);
   */
  authenticate(input: Identity, options?: RpcOptions): UnaryCall<Identity, Identity>;
  /**
   * @generated from protobuf rpc: Revoke(ecsrelay.Identity) returns (ecsrelay.Identity);
   */
  revoke(input: Identity, options?: RpcOptions): UnaryCall<Identity, Identity>;
  /**
   * @generated from protobuf rpc: Ping(ecsrelay.Identity) returns (ecsrelay.Identity);
   */
  ping(input: Identity, options?: RpcOptions): UnaryCall<Identity, Identity>;
  /**
   * @generated from protobuf rpc: CountAuthenticated(ecsrelay.CountIdentitiesRequest) returns (ecsrelay.CountIdentitiesResponse);
   */
  countAuthenticated(
    input: CountIdentitiesRequest,
    options?: RpcOptions
  ): UnaryCall<CountIdentitiesRequest, CountIdentitiesResponse>;
  /**
   * @generated from protobuf rpc: CountConnected(ecsrelay.CountIdentitiesRequest) returns (ecsrelay.CountIdentitiesResponse);
   */
  countConnected(
    input: CountIdentitiesRequest,
    options?: RpcOptions
  ): UnaryCall<CountIdentitiesRequest, CountIdentitiesResponse>;
  /**
   * @generated from protobuf rpc: Subscribe(ecsrelay.SubscriptionRequest) returns (ecsrelay.Subscription);
   */
  subscribe(input: SubscriptionRequest, options?: RpcOptions): UnaryCall<SubscriptionRequest, Subscription>;
  /**
   * @generated from protobuf rpc: Unsubscribe(ecsrelay.SubscriptionRequest) returns (ecsrelay.Subscription);
   */
  unsubscribe(input: SubscriptionRequest, options?: RpcOptions): UnaryCall<SubscriptionRequest, Subscription>;
  /**
   * @generated from protobuf rpc: OpenStream(ecsrelay.Identity) returns (stream ecsrelay.Message);
   */
  openStream(input: Identity, options?: RpcOptions): ServerStreamingCall<Identity, Message>;
  /**
   * @generated from protobuf rpc: Push(ecsrelay.PushRequest) returns (ecsrelay.PushResponse);
   */
  push(input: PushRequest, options?: RpcOptions): UnaryCall<PushRequest, PushResponse>;
}
/**
 * The Relay Service definition.
 *
 * @generated from protobuf service ecsrelay.ECSRelayService
 */
export class ECSRelayServiceClient implements IECSRelayServiceClient, ServiceInfo {
  typeName = ECSRelayService.typeName;
  methods = ECSRelayService.methods;
  options = ECSRelayService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: Authenticate(ecsrelay.Identity) returns (ecsrelay.Identity);
   */
  authenticate(input: Identity, options?: RpcOptions): UnaryCall<Identity, Identity> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<Identity, Identity>("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: Revoke(ecsrelay.Identity) returns (ecsrelay.Identity);
   */
  revoke(input: Identity, options?: RpcOptions): UnaryCall<Identity, Identity> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<Identity, Identity>("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: Ping(ecsrelay.Identity) returns (ecsrelay.Identity);
   */
  ping(input: Identity, options?: RpcOptions): UnaryCall<Identity, Identity> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<Identity, Identity>("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: CountAuthenticated(ecsrelay.CountIdentitiesRequest) returns (ecsrelay.CountIdentitiesResponse);
   */
  countAuthenticated(
    input: CountIdentitiesRequest,
    options?: RpcOptions
  ): UnaryCall<CountIdentitiesRequest, CountIdentitiesResponse> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<CountIdentitiesRequest, CountIdentitiesResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * @generated from protobuf rpc: CountConnected(ecsrelay.CountIdentitiesRequest) returns (ecsrelay.CountIdentitiesResponse);
   */
  countConnected(
    input: CountIdentitiesRequest,
    options?: RpcOptions
  ): UnaryCall<CountIdentitiesRequest, CountIdentitiesResponse> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<CountIdentitiesRequest, CountIdentitiesResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * @generated from protobuf rpc: Subscribe(ecsrelay.SubscriptionRequest) returns (ecsrelay.Subscription);
   */
  subscribe(input: SubscriptionRequest, options?: RpcOptions): UnaryCall<SubscriptionRequest, Subscription> {
    const method = this.methods[5],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<SubscriptionRequest, Subscription>("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: Unsubscribe(ecsrelay.SubscriptionRequest) returns (ecsrelay.Subscription);
   */
  unsubscribe(input: SubscriptionRequest, options?: RpcOptions): UnaryCall<SubscriptionRequest, Subscription> {
    const method = this.methods[6],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<SubscriptionRequest, Subscription>("unary", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: OpenStream(ecsrelay.Identity) returns (stream ecsrelay.Message);
   */
  openStream(input: Identity, options?: RpcOptions): ServerStreamingCall<Identity, Message> {
    const method = this.methods[7],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<Identity, Message>("serverStreaming", this._transport, method, opt, input);
  }
  /**
   * @generated from protobuf rpc: Push(ecsrelay.PushRequest) returns (ecsrelay.PushResponse);
   */
  push(input: PushRequest, options?: RpcOptions): UnaryCall<PushRequest, PushResponse> {
    const method = this.methods[8],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<PushRequest, PushResponse>("unary", this._transport, method, opt, input);
  }
}