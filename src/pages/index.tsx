import PasswordGenerator from './password-generator';

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PasswordGenerator></PasswordGenerator>
    </main>
  );
}
