import SearchVault from "./SearchVault";
import VaultCard from "./VaultCard";

export default function VaultStore() {
  return (
    <>
      <main class="p-8">
        <div class="max-w-7xl mx-auto space-y-10 px-4">
          <section class="rounded-3xl border border-neutral-800 bg-linear-to-br from-neutral-900/80 to-neutral-900/40 p-6 shadow-2xl shadow-black/40 backdrop-blur">
            <SearchVault />
          </section>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <VaultCard />
          </div>
        </div>
      </main>
    </>
  );
}
