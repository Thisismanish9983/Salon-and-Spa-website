export const SERVICES_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'hair-styling', label: 'Hair Styling & Haircuts' },
  { id: 'hair-coloring', label: 'Hair Coloring' },
  { id: 'hair-spa', label: 'Hair Spa & Treatments' },
  { id: 'skincare', label: 'Facial & Skin Care' },
  { id: 'bridal', label: 'Bridal Makeup' },
  { id: 'nails', label: 'Manicure & Pedicure' },
  { id: 'massage', label: 'Body Massage' },
  { id: 'spa-rituals', label: 'Luxury Spa Treatments' }
];

export const SERVICES_DATA = [
  {
    id: 'couture-haircut-blowdry',
    category: 'hair-styling',
    categoryName: 'Hair Styling & Haircuts',
    name: 'Couture Haircut & Bespoke Blowdry',
    shortDesc: 'A tailored cut sculpted to complement facial contours, paired with an indulgent caviar shampoo rinse and high-gloss blowout.',
    fullDesc: 'Experience hair artistry at its finest. Our master stylists begin with an in-depth facial architecture and hair texture consultation. Following a bespoke sensory wash featuring nutrient-rich botanical elixirs and scalp acupressure, your hair is sculpted with precision shears. Completed with a signature thermal blowout and diamond shine finish.',
    price: 95,
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    benefits: [
      'Tailored consultation matching your bone structure',
      'Micro-nutrient botanical wash & stress-melting scalp massage',
      'Split-end prevention precision scissor technique',
      'Thermal shield infusion for 72-hour humidity protection'
    ],
    procedureSteps: [
      { step: '01', title: 'Consultation & Hair Diagnostic', desc: 'Analysis of curl pattern, growth grain, and facial symmetry.' },
      { step: '02', title: 'Sensory Botanicals Wash', desc: 'Gentle clarifying shampoo and scalp pressure point release.' },
      { step: '03', title: 'Architectural Sculpting', desc: 'Precision dry or wet cutting according to hair dynamics.' },
      { step: '04', title: 'High-Lustre Blowout', desc: 'Round-brush silk styling and lightweight serum gloss.' }
    ],
    recommendedFor: 'Anyone seeking a signature transformation or maintaining effortless, healthy volume.',
    includedTreatments: ['Aromatherapy rinse', 'Custom thermal styling', 'Scalp detox application']
  },
  {
    id: 'french-balayage-gloss',
    category: 'hair-coloring',
    categoryName: 'Hair Coloring',
    name: 'French Balayage & Diamond Gloss',
    shortDesc: 'Hand-painted sunlit dimension with seamless gradients, sealed with an ultra-reflective conditioning glaze.',
    fullDesc: 'Our master colorists utilize freehand French balayage painting techniques to create lived-in, multidimensional luminescence. Free of harsh demarcation lines, this bespoke technique includes bond-building plex technology and is sealed with an acidic liquid gloss for mirror-like refraction.',
    price: 240,
    duration: '150 mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    benefits: [
      'Natural, low-maintenance seamless grow-out',
      'Bond-building complex prevents strand degradation',
      'Custom tone neutralization for warm, cool, or champagne notes',
      'High-gloss conditioning treatment locked into cuticle'
    ],
    procedureSteps: [
      { step: '01', title: 'Color Mapping & Strand Test', desc: 'Harmonizing tone shades with natural eye color and skin undertones.' },
      { step: '02', title: 'Artisanal Hand-Painting', desc: 'Strategic placement creating soft roots and radiant tips.' },
      { step: '03', title: 'Bond Fortification', desc: 'Deep restructuring treatment to restore keratin bonds.' },
      { step: '04', title: 'Acidic Gloss Tonic', desc: 'pH-balancing glaze providing mirror shine and cuticle closure.' }
    ],
    recommendedFor: 'Those desiring effortless, luxurious blonde, brunette caramel, or bronzed dimension.',
    includedTreatments: ['Bond protector infusion', 'Custom gloss toner', 'Hydration silk mask']
  },
  {
    id: 'caviar-keratin-hair-spa',
    category: 'hair-spa',
    categoryName: 'Hair Spa & Treatments',
    name: 'Imperial Caviar & Keratin Hair Spa',
    shortDesc: 'A regenerative sanctuary ritual delivering sea-caviar extracts, liquid silk, and warm jade stone scalp massage.',
    fullDesc: 'Revive overstressed, dull, or chemically-treated tresses with the restorative power of French sea-caviar enzymes, bio-identical keratin peptides, and warm botanical oils. Includes an invigorating jade stone scalp decompression ritual and thermal micro-mist infusion.',
    price: 150,
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    benefits: [
      'Intense cellular moisture replenishment',
      'Frizz eradication and fiber smoothing up to 4 weeks',
      'Scalp micro-circulation boost via warm jade stones',
      'Antioxidant shield against UV and urban pollutants'
    ],
    procedureSteps: [
      { step: '01', title: 'Thermal Steam Cleansing', desc: 'Opens hair cuticles and releases scalp congestion.' },
      { step: '02', title: 'Caviar Mask Massage', desc: 'Strand-by-strand application of bio-active caviar pearls.' },
      { step: '03', title: 'Acupressure Jade Ritual', desc: 'Warm jade gua sha gliding along cranial tension meridian points.' },
      { step: '04', title: 'Cryo-Seal Rinse', desc: 'Cold botanical seal to lock nourishing proteins inside the cortex.' }
    ],
    recommendedFor: 'Dry, brittle, heat-damaged hair needing immediate silkiness and deep hydration.',
    includedTreatments: ['Micro-mist infusion', 'Jade stone massage', 'Gold serum finish']
  },
  {
    id: 'gold-collagen-facial',
    category: 'skincare',
    categoryName: 'Facial & Skin Care',
    name: '24K Gold & Bio-Collagen Facial',
    shortDesc: 'Pure 24-karat gold leaf therapy paired with micro-current lifting and bioactive collagen infusions for luminous skin.',
    fullDesc: 'The pinnacle of anti-aging luxury. This celebrated facial begins with an enzymatic double exfoliation and lymphatic drainage massage. Pure 24-karat gold sheets are infused into dermal layers utilizing ultrasound micro-currents to stimulate elastin production, diminish fine lines, and impart an otherworldly radiance.',
    price: 185,
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    benefits: [
      'Visible contour tightening and sculpt along cheekbones and jawline',
      'Stimulates endogenous collagen and cellular renewal',
      'Reduces hyperpigmentation and calms inflammation',
      'Instantly plump, dewy, red-carpet ready complexion'
    ],
    procedureSteps: [
      { step: '01', title: 'Double Silk Cleanse', desc: 'Gentle botanical oil and probiotic foaming cleanser.' },
      { step: '02', title: 'Enzyme Micro-Polish', desc: 'Fruit acid peel to dissolve dull keratinized cells.' },
      { step: '03', title: '24K Gold Infusion', desc: 'Application of genuine 24-karat gold foil with sonic vibration.' },
      { step: '04', title: 'Micro-current Sculpt', desc: 'Muscle-lifting currents and cooling cryo-globes.' }
    ],
    recommendedFor: 'Pre-event glow, tired skin, fine lines, or anyone craving regal skin rejuvenation.',
    includedTreatments: ['Cryo-globe therapy', 'Neck & decollete lift', 'Collagen hand mask']
  },
  {
    id: 'regal-bridal-couture-makeup',
    category: 'bridal',
    categoryName: 'Bridal Makeup',
    name: 'Regal Bridal Couture Makeup & Styling',
    shortDesc: 'A masterfully curated bespoke bridal experience, featuring airbrush radiance, customized lashes, and veil placement.',
    fullDesc: 'Your most cherished day deserves timeless elegance. Our senior bridal artists create a picture-perfect, 16-hour long-wear look tailored to your skin tone, wedding theme, and gown. Includes comprehensive skin prep, HD airbrush foundation, mink-soft bespoke lash clustering, veil and jewelry pinning, and an emergency bridal touchup kit.',
    price: 320,
    duration: '120 mins',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    benefits: [
      '16-hour transfer-proof and tear-resistant application',
      'HD airbrush complexion flawlessly calibrated for photography',
      'Deluxe skin hydration prep with rose quartz sculpting',
      'Includes bridal day-of luxury touch-up kit'
    ],
    procedureSteps: [
      { step: '01', title: 'Glow Dermal Prep', desc: 'Intensive peptide sheet mask and lymphatic fluid de-puffing.' },
      { step: '02', title: 'Flawless Airbrush Base', desc: 'Micro-fine pigment misting providing natural, weightless coverage.' },
      { step: '03', title: 'Eye Artistry & Lashes', desc: 'Soft-glam smoky or ethereal definition with handcrafted lashes.' },
      { step: '04', title: 'Setting & Adornment', desc: 'Micro-powder lock, veil fitting, and lip contour seal.' }
    ],
    recommendedFor: 'Brides, engagement galas, red carpet events, and heirloom portraiture.',
    includedTreatments: ['Custom eyelash clusters', 'Bridal touch-up kit', 'Jewelry & veil styling']
  },
  {
    id: 'champagne-rose-pedicure-manicure',
    category: 'nails',
    categoryName: 'Manicure & Pedicure',
    name: 'Champagne & Rose Gold Nail Spa',
    shortDesc: 'Decadent hand and foot rituals featuring organic rose petal soaks, champagne scrubs, and gel-lacquer perfection.',
    fullDesc: 'Immerse tired hands and feet in a warm bath of Bulgarian rose petals and bubbly vintage champagne acids. We gently exfoliate with crushed apricot seed scrub, followed by deep cuticle treatment, a warm paraffin wax cocoon, and an artisanal massage using warm botanical oils. Finished with non-toxic long-lasting gel lacquer.',
    price: 110,
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    benefits: [
      'Intense softening of cuticles and heel calluses',
      'Antioxidant benefits of grape seed polyphenols',
      'Warm peach paraffin wrap for soothing joint stiffness',
      'Up to 3 weeks of high-gloss chip-free manicure finish'
    ],
    procedureSteps: [
      { step: '01', title: 'Rose Effervescent Soak', desc: 'Warm hydro-jet basin infused with rose damascena oils.' },
      { step: '02', title: 'Champagne Sugar Exfoliation', desc: 'Gentle buffing of dry skin from knees to toes.' },
      { step: '03', title: 'Warm Paraffin Mask', desc: 'Thermal bootie wrap locking in botanical lipids.' },
      { step: '04', title: 'Gel Lacquer Artistry', desc: 'Precision shaping and cured high-shine finish.' }
    ],
    recommendedFor: 'Unmatched pampering for hands and feet, bridal prep, or weekend rejuvenation.',
    includedTreatments: ['Paraffin heat therapy', 'Extended foot massage', 'Cuticle elixir']
  },
  {
    id: 'hot-stone-aromatherapy-massage',
    category: 'massage',
    categoryName: 'Body Massage',
    name: 'Himalayan Hot Stone & Aromatherapy Massage',
    shortDesc: 'Heated basalt and Himalayan salt stones melt chronic muscular tension in an olfactory sanctuary of lavender and sandalwood.',
    fullDesc: 'Surrender to absolute serenity. Smooth volcanic basalt stones and pink Himalayan salt crystals are heated to the ideal therapeutic temperature. Coated in organic essential oils of French lavender, sandalwood, and sweet orange, our therapists rhythmically glide the stones over deep muscular pathways to dissolve stress and rebalance bio-energies.',
    price: 165,
    duration: '90 mins',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    benefits: [
      'Profound relief from muscular spasms and back stiffness',
      'Negative ions from salt stones harmonize nervous system',
      'Significantly lowers cortisol and elevates sleep quality',
      'Boosts lymphatic circulation and full-body detoxification'
    ],
    procedureSteps: [
      { step: '01', title: 'Aroma Inhalation & Foot Bath', desc: 'Custom essential oil selection and warm herbal foot scrub.' },
      { step: '02', title: 'Effleurage Warm-Up', desc: 'Long, rhythmic strokes preparing muscle layers for heat.' },
      { step: '03', title: 'Hot Stone Dynamic Gliding', desc: 'Deep-tissue stone therapy along spine, neck, and limbs.' },
      { step: '04', title: 'Chakra Crystal Placement', desc: 'Resting energy balancing stones with gentle temple massage.' }
    ],
    recommendedFor: 'High-stress lifestyles, chronic muscle stiffness, insomnia, or general unwinding.',
    includedTreatments: ['Himalayan salt scrub', 'Warm oil scalp drizzle', 'Herbal tea degustation']
  },
  {
    id: 'moroccan-hammam-ritual',
    category: 'spa-rituals',
    categoryName: 'Luxury Spa Treatments',
    name: 'Royal Moroccan Hammam & Amber Wrap',
    shortDesc: 'A centuries-old imperial purification ritual with black olive soap, Kessa glove exfoliation, and warm rhassoul clay wrap.',
    fullDesc: 'Step into our private heated marble sanctuary. Experience authentic oriental wellness beginning with eucalyptus vapor inhalation and a coating of black olive Savon Beldi soap. After deep exfoliation with an authentic Kessa glove, your body is enveloped in Atlas Mountain rhassoul clay infused with rose water and pure argan oil.',
    price: 210,
    duration: '105 mins',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    benefits: [
      'Eliminates dead skin layers for baby-soft dermal renewal',
      'Draws out impurities and clarifies pore congestion',
      'Restores skin firmness with cold-pressed organic argan oil',
      'Deep meditative relaxation in private steam room'
    ],
    procedureSteps: [
      { step: '01', title: 'Eucalyptus Vapor Steam', desc: 'Warm moisture softens skin and clears respiratory pathways.' },
      { step: '02', title: 'Savon Beldi Cleanse', desc: 'Rich olive paste infused with therapeutic eucalyptus.' },
      { step: '03', title: 'Kessa Vigorous Exfoliation', desc: 'Artisanal glove buffing away all epidermal impurities.' },
      { step: '04', title: 'Rhassoul & Argan Cocoon', desc: 'Detoxifying mineral mask followed by warm rain rinse.' }
    ],
    recommendedFor: 'Complete full-body detoxification, romantic couples, and sensory purification.',
    includedTreatments: ['Private heated steam room', 'Warm rain vichy shower', 'Pure argan finish']
  }
];
