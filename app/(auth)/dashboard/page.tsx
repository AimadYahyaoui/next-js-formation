import { getFormDevStructure } from "@/features/dev/api/get-dev-form";
import DevForm from "@/features/dev/components/dev-form";

const DashboardPage = async () => {
  const form = await getFormDevStructure();
  return (
    <div>
      <DevForm form={form}></DevForm>
    </div>
  );
};

export default DashboardPage;
