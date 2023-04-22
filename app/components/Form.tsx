import { ChangeEvent } from "react";

type FormProps = {
  username: string;
  email: string;
  handleUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Form({ username, email, handleUsernameChange }: FormProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-zinc-300">
        Reserve your unique address before the launch
      </p>
      <div className="relative">
        <p className="text-zinc-500 pointer-events-none text-sm absolute left-4 flex items-center h-full">
          https://
        </p>
        <p className="text-zinc-500 pointer-events-none text-sm absolute right-4 flex items-center h-full">
          .sawthat.band
        </p>
        <input
          value={username}
          onChange={handleUsernameChange}
          placeholder="your-username"
          className="bg-white/10 pl-[72px] text-white pr-[132px] w-full border text-sm border-zinc-600 p-4 rounded-lg"
          autoFocus
        />
      </div>
      <button className="bg-gradient-to-br from-emerald-300 to-green-400 text-zinc-900 text-sm font-semibold p-4 rounded-lg">
        Check availability
      </button>
    </div>
  );
}

export default Form;
