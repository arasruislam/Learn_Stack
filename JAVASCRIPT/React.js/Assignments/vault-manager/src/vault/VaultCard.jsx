export default function VaultCard(){
    return (
      <>
        <article class="rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-2xl shadow-black/30 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-500/20">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-800 bg-blue-500/10 text-sm font-semibold uppercase text-blue-400">
                Fb
              </div>
              <div>
                <h3 class="text-lg font-semibold">Facebook</h3>
                <p class="text-xs uppercase tracking-wide text-neutral-500">
                  Social
                </p>
              </div>
            </div>
          </div>
          <p class="mt-4 text-sm text-neutral-400">facebook.com</p>
          <dl class="mt-5 space-y-3 text-sm">
            <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
              <dt class="text-xs uppercase tracking-wide text-neutral-500">
                Username
              </dt>
              <dd class="text-neutral-50">john.doe@email.com</dd>
            </div>
            <div class="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3">
              <dt class="text-xs uppercase tracking-wide text-neutral-500">
                Password
              </dt>
              <dd class="flex items-center gap-2 text-neutral-50">
                <span>••••••••</span>
                <button class="text-xs font-semibold text-blue-400">
                  Reveal
                </button>
              </dd>
            </div>
          </dl>
        </article>
      </>
    );
}
