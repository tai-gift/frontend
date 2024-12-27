const Win: React.FC = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto w-[90%] md:w-[85%]">
        <div className="flex min-h-96 w-full flex-col items-center justify-center gap-3 rounded-2xl bg-primary text-white p-6">
          <h2 className="max-w-[789px] text-4xl font-bold md:text-5xl text-center">
            For every $1 you give, a child gets closer to a better future.
          </h2>
          <p className="text-center font-normal md:text-base lg:text-lg">
            Don’t wait....
          </p>
          <button
            type="button"
            className="min-h-10 w-fit rounded-3xl bg-white px-6 py-3 text-sm font-semibold text-primary outline-none transition-all duration-300 hover:opacity-90 md:px-10"
          >
            Give & win now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Win;
