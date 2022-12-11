import { ethers } from "ethers";
import { Window, StdABI, StdEventsABI } from "./types"
import Std from "../assets/Student.json";
import Ast from "../assets/ASTEvent.json";

declare let window: Window;

class AstContextBuilder {
  provider: ethers.providers.Web3Provider | undefined;
  signer: ethers.providers.JsonRpcSigner | undefined;
  student: ethers.Contract | undefined;
  stdAddr: string;
  stdABI: StdABI;
  stdEventsABI: StdEventsABI;
  eventAddr: string;
  stdEvents: ethers.Contract | undefined;
  constructor() {
    this.stdAddr = "0x43bBfaE8463c9d93cE8FA2f32297E9209511Ee28";
    this.eventAddr = "0x5e8A25A7f5797F50337d5DbE7fFeaC8363947B13";
    this.stdABI = Std.abi;
    this.stdEventsABI = Ast.abi;
  }
  async addProvider(): Promise<AstContextBuilder> {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    await this.provider.send("eth_requestAccounts", []);
    return this;
  }
  async addSigner(): Promise<AstContextBuilder> {
    this.signer = this.provider?.getSigner();
    return this;
  }
  async addContracts(): Promise<AstContextBuilder> {
    this.student = new ethers.Contract(this.stdAddr, this.stdABI, this.signer);
    this.student = new ethers.Contract(this.stdAddr, this.stdEventsABI, this.signer);
    return this;
  }
  build(): AstContext {
    return new AstContext(this.provider, this.signer, this.student, this.stdEvents);
  }
}
class AstContext {

  provider: ethers.providers.Web3Provider | undefined;
  signer: ethers.providers.JsonRpcSigner | undefined;
  student: ethers.Contract | undefined;
  stdEvents: ethers.Contract | undefined;
  constructor(provider: ethers.providers.Web3Provider | undefined,
    signer: ethers.providers.JsonRpcSigner | undefined,
    student: ethers.Contract | undefined,
    stdEvents: ethers.Contract | undefined) {
    this.provider = provider;
    this.signer = signer;
    this.student = student;
    this.stdEvents = stdEvents;
  }
}

const builder = new AstContextBuilder();
export const astCtx = (await (await (await builder.addProvider()).addSigner()).addContracts()).build();
