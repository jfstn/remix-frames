export const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
  <main className="flex size-full">
    <section className="m-auto flex-col">{children}</section>
  </main>
);
