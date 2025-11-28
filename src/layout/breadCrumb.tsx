interface Props {
  title: string;
  path: string;
}

export default function Breadcrumb({ title, path }: Props) {
  return (
    <div className="w-full bg-gray-900 pt-10 pb-10 relative">
      <div className="container mx-auto text-center text-white">

        <h2 className="text-3xl font-bold">{title}</h2>

        <div className="mt-3 text-sm">
          <a href="/" className="text-red-500">Home</a>
          <span className="mx-2">/</span>
          {path}
        </div>
      </div>
    </div>
  );
}
