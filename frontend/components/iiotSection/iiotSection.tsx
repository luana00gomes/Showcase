import { title } from "@/components/primitives";

const capabilities = [
  {
    icon: "🏭",
    label: "PLC & Modbus TCP",
    description:
      "Industrial controller integration — emergency stop, mission control and real-time monitoring of production equipment.",
  },
  {
    icon: "🤖",
    label: "Robotics — UR & ROS",
    description:
      "Universal Robots (UR) arm integration in factory environments, HMI development for tablet-based operator interfaces.",
  },
  {
    icon: "📷",
    label: "Computer Vision",
    description:
      "Industrial camera management, datamatrix reading, OCR (Tesseract/Keras), OpenCV filters and quality inspection pipelines.",
  },
  {
    icon: "⚕️",
    label: "Critical Systems",
    description:
      "Anvisa-licensed healthcare system — prescription, dispensation and traceability of controlled medications with audit trail.",
  },
  {
    icon: "🔌",
    label: "Embedded Systems",
    description:
      "Arduino, TIVA C (TM4C), VHDL/FPGA logic design, real-time firmware and sensor/actuator interfacing.",
  },
  {
    icon: "🔗",
    label: "ERP & Systems Integration",
    description:
      "SAP/ERP integration for real-time production monitoring, MySQL→PostgreSQL large-scale data migration.",
  },
];

export default function IIoTSection() {
  return (
    <section className="w-full mt-16">
      <h2 className={title({ size: "lg" })}>Industrial & Embedded</h2>
      <p className="mt-2 text-default-500 text-sm max-w-xl">
        Beyond web development — systems that run on factory floors, hospital
        infrastructure and embedded hardware.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((cap) => (
          <div
            key={cap.label}
            className="flex gap-4 p-4 rounded-xl border border-default-200 hover:border-violet-500 transition-colors"
          >
            <span className="text-3xl shrink-0 mt-0.5">{cap.icon}</span>
            <div>
              <h3 className="font-semibold text-sm mb-1">{cap.label}</h3>
              <p className="text-xs text-default-500 leading-relaxed">
                {cap.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
