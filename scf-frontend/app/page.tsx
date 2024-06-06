import CardAcc from "./components/CardAcc";
import Goals from "./components/Goals";

export default function Home() {
  return (
    <>
      <section className="flex justify-between">
        <div className="flex gap-2 flex-col">
          <h2 className="text-xl text-zinc-500">Saldo</h2>
          <CardAcc />
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-xl text-zinc-500">Metas</h2>
          <Goals />
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-xl text-zinc-500">Últimas compras</h2>
          <CardAcc />
        </div>
      </section>
      <section></section>
    </>
  );
}