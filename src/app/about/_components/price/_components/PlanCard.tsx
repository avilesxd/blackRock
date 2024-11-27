interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
}

const PlanCard = ({ title, price, features }: PlanCardProps) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
      <h3 className="text-2xl font-semibold dark:text-gray-100 mb-4">
        {title}
      </h3>
      <p className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">
        {price}
      </p>
      <ul className="pl-5 text-sm text-gray-700 dark:text-gray-400 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
