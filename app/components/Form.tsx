import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, MutableRefObject } from "react";

type FormProps = {
  username: string;
  email: string;
  handleUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValidEmail: boolean;
  submit: () => void;
  loading: boolean;
  error: string;
  success: boolean;
  userRef: MutableRefObject<
    | {
        email: string;
        username: string;
      }
    | undefined
  >;
};

function Form({
  username,
  email,
  handleUsernameChange,
  handleEmailChange,
  isValidEmail,
  submit,
  loading,
  error,
  success,
  userRef,
}: FormProps) {
  const disabled = !username || !isValidEmail || loading;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="flex flex-col gap-2"
    >
      <p className="text-sm text-zinc-300">
        Reserve your username before the launch
      </p>
      <div className="relative">
        <p className="text-zinc-500 pointer-events-none text-sm absolute left-4 flex items-center h-full">
          https://
        </p>
        <p className="text-zinc-500 pointer-events-none text-sm absolute right-4 flex items-center h-full">
          .sawthat.band
        </p>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
          className="bg-white/10 focus:outline-zinc-100/60 pl-[72px] text-white pr-[132px] w-full border text-sm border-zinc-600 p-4 rounded-lg"
          autoFocus
        />
      </div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="email address"
        className="bg-white/10 focus:outline-zinc-100/60 text-white pr-[132px] w-full border text-sm border-zinc-600 p-4 rounded-lg"
      />
      <button
        type="submit"
        disabled={disabled}
        className="bg-gradient-to-br from-emerald-400 to-green-400 hover:from-green-400 hover:to-green-400 text-zinc-900 text-sm font-semibold p-4 rounded-lg disabled:hover:from-emerald-400 disabled:hover:to-green-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Reserving..." : "Reserve username"}
      </button>
      {error && (
        <div className="text-red-400 flex items-center gap-1">
          <ExclamationCircleIcon className="w-4 h-4" />
          <p className="text-xs">{error}</p>
        </div>
      )}
      {success && (
        <div className="flex items-center gap-1 text-emerald-300">
          <CheckIcon className="w-4 h-4" />
          <p className="text-xs">
            Username{" "}
            <span className="font-medium text-emerald-200">
              {userRef.current?.username}
            </span>{" "}
            is now reserved for{" "}
            <span className="font-medium text-emerald-200">
              {userRef.current?.email}
            </span>
          </p>
        </div>
      )}
    </form>
  );
}

export default Form;
