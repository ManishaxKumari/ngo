import { Button } from '@/components/ui/button';
import { BookOpen, Users, Heart } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Effective Projects in Africa',
      description: 'Supporting educational initiatives and sustainable community development across the continent.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-500',
    },
    {
      icon: Users,
      title: 'Flexible Accord for Refugees Programme',
      description: 'Providing comprehensive support and opportunities for refugees seeking better futures.',
      color: 'from-yellow-400 to-yellow-500',
      bgColor: 'bg-yellow-400',
    },
    {
      icon: Heart,
      title: 'Food Assistance for Refugees',
      description: 'Ensuring food security and nutritional support for vulnerable refugee communities.',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-500',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`rounded-lg p-8 text-white shadow-lg bg-gradient-to-br ${feature.color}`}
              >
                <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  className="bg-white text-current hover:bg-gray-100 rounded-full px-6 py-1 text-sm font-semibold"
                >
                  Explore
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
