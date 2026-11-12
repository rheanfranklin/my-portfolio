"use client";
import "./CircuitSim.css";

function LogicGatesGrid(): React.ReactNode {
    return(
        <div className="section">
            {/* Col 1 */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/nor-gate.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>NOR gate</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/not-gate.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>NOT gate</figcaption>
                </figure>
            </div>
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/nand-gate.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>NAND gate</figcaption>
                </figure>
                
                <figure>
                    <img
                        src="/images/projects/circuit-sim/and-gate.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>AND gate</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/or-gate.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>OR gate</figcaption>
                </figure>
            </div>
        </div>
    );
}

function CombinationalCircuits(): React.ReactNode {
    return (
        <div className="section">
            {/* First column */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/1-bit-adder.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>1-Bit Adder</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/8-bit-adder.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>8-Bit Adder</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/8-Bit-alu.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>8-Bit ALU</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/mux.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>MUX</figcaption>
                </figure>
            </div>
            {/* Second column */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/decoder.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>Decoder</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/alu.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>ALU</figcaption>
                </figure>
            </div>
        </div>
    );
}

function StorageTimingCircuits(): React.ReactNode {
    return (
        <div className="section">
            {/* First column */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/rs-latch.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>RS Latch</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/gated-d-latch.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>Gated-D Latch</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/d-flip-flop.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>D-Flip Flop</figcaption>
                </figure>
            </div>
            {/* Second column */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/register.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>Register</figcaption>
                </figure>
                <figure>
                    <img
                        src="/images/projects/circuit-sim/cycle-counter.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>Cycle Counter</figcaption>
                </figure>
            </div>
        </div>
    );
}

function StateMachineCircuits(): React.ReactNode {
    return (
        <div className="section">
            {/* First column */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/finite-state-machine.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>Finite State Machine</figcaption>
                </figure>
            </div>
            {/* Second column */}
            <div className="col">
                <figure>
                    <img
                        src="/images/projects/circuit-sim/one-hot-state-machine.png"
                        alt="Circuit Sim"
                    />
                    <figcaption>One-Hot State Machine</figcaption>
                </figure>
            </div>
        </div>
    );
} 

export default function CircuitSim(): React.ReactNode {
    return (
        <div className="container-box circuit-sim">
            <h1>Circuit Sim</h1>
            <p className="section-description">Screenshots of the circuits I built in a circuit simulator.</p>
            <h2>Logic Gates</h2>
            {LogicGatesGrid()}
            <h2>Combinational Circuits</h2>
            {CombinationalCircuits()}
            <h2>Circuits with Storage & Timing</h2>
            {StorageTimingCircuits()}
            <h2>State Machines</h2>
            {StateMachineCircuits()}
            <h2>Full LC3</h2>
            <figure>
                <img
                    src="/images/projects/circuit-sim/lc-3.png"
                    alt="Circuit Sim"
                />
            </figure>
            <div className="footer-padding"/>
        </div>
    );
}