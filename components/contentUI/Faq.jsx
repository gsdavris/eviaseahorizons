import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { getIconByName } from '@/utils/icons';

const faqs = [
	{
		question: 'Πώς μπορώ να κλείσω ένα σκάφος με την Evia Sea Horizons;',
		answer:
			'Μπορείτε να επικοινωνήσετε μαζί μας μέσω της φόρμας, να μας καλέσετε ή να στείλετε email. Θα σας απαντήσουμε άμεσα για να σας καθοδηγήσουμε, να σας προτείνουμε τη διαδρομή που σας ταιριάζει και να προχωρήσουμε στην κράτηση.',
	},
	{
		question: 'Τι μέτρα ασφαλείας λαμβάνετε;',
		answer:
			'Όλα τα σκάφη μας είναι εξοπλισμένα με GPS tracker, σωστικά, τέντα σκίασης και ψυγειάκι. Παρέχουμε αναλυτική ενημέρωση (briefing) πριν από κάθε εξόρμηση ώστε να αισθάνεστε απόλυτα άνετα και ασφαλείς — ακόμη και αν είναι η πρώτη σας φορά.',
	},
	{
		question: 'Τι γίνεται αν ο καιρός δεν είναι καλός την ημέρα της εξόρμησης;',
		answer:
			'Αν οι καιρικές συνθήκες δεν είναι ιδανικές, θα σας προτείνουμε μια εναλλακτική, πιο ασφαλή διαδρομή ώστε να απολαύσετε τη βόλτα σας χωρίς κινδύνους. Αν δεν υπάρχει κατάλληλη επιλογή για την ημέρα εκείνη, επικοινωνούμε άμεσα μαζί σας για επαναπρογραμματισμό ή πλήρη επιστροφή της προκαταβολής. Η ασφάλειά σας και η ποιότητα της εμπειρίας είναι για εμάς το Α και το Ω.',
	},
];

export default function Faq() {
	return (
		<div className='w-full py-6'>
			<div className='mx-auto w-full max-w-lg divide-y divide-light-text/5 rounded-xl bg-light-text/5'>
				{faqs.map((faq, index) => (
					<Disclosure
						as='div'
						key={index}
						className='p-6'>
						<DisclosureButton className='group flex w-full items-center justify-between'>
							<span className='text-sm/6 font-medium text-light-text group-data-[hover]:text-light-text/80'>
								{faq.question}
							</span>
							{getIconByName(
								'downArrow',
								'',
								'size-5 fill-light-text/60 group-data-[hover]:fill-light-text/50 group-data-[open]:rotate-180'
							)}
						</DisclosureButton>
						<DisclosurePanel className='mt-2 text-sm/5 text-light-text/50'>
							{faq.answer}
						</DisclosurePanel>
					</Disclosure>
				))}
			</div>
		</div>
	);
}
