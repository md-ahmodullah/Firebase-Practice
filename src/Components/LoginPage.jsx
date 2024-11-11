export default function LoginPage() {
  return (
    <>
      <div className="text-white hero bg-base-200 my-12">
        <section className="w-10/12 mx-auto my-12 min-h-[400px] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-400 text-center">
              Congratulations!
            </h1>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-400 text-center">
              You are a Premium Member!
            </h1>
            <img
              src="https://i.ibb.co.com/JCYSbhZ/dash.png"
              alt="Dashboard Page"
            />
            <h2 className="text-2xl font-bold text-gray-500 text-center">
              Build Your Own Kingdom
            </h2>
          </div>
        </section>
      </div>
    </>
  );
}
