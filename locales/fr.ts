export const fr = {
  common: {
    ok: 'OK',
    cancel: 'Annuler',
    save: 'Enregistrer',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    delete: 'Supprimer',
    edit: 'Modifier',
    add: 'Ajouter',
  },
  navigation: {
    home: 'Accueil',
    components: 'Composants',
    guidelines: 'Directives',
    settings: 'Paramètres',
  },
  list: {
    empty: 'la liste est vide',
  },
  screens: {
    home: {
      title: "Guide d'Accessibilité",
      subtitle: "Maîtrisez l'accessibilité numérique avec des exemples et directives complets",
      button: 'Commencer',
      greeting: 'Bonjour, {{name}} !',
    },
    components: {
      title: "Composants d'accessibilité",
      subtitle:
        "Découvrez toutes les fonctionnalités et les composants d'accessibilité disponibles",
    },
    settings: {
      title: 'paramètres',
      subtitle: "Configurez vos paramètres d'accessibilité",
      fontSize: {
        title: 'Taille du texte',
        description: "Ajustez la taille du texte affiché dans l'application",
        reset: 'Réinitialiser',
        maxFont: 'Grand (24px)',
        minFont: 'Petit (12px)',
      },
      colors: {
        title: 'Personnalisation des couleurs',
        description: 'Ajustez les couleurs de fond et du texte pour l’accessibilité.',
        background: 'Couleur de fond',
        text: 'Couleur du texte',
        reset: 'Réinitialiser',
        contrastLabel: 'Rapport de contraste',
        contrastGood: '(Bon)',
        contrastLow: '(Faible)',
      },
      language: {
        title: 'Personnalisation de la langue',
        description: 'Basculez entre les langues disponibles pour l’application.',
        selectLabel: 'Choisir la langue',
      },
    },
    profile: {
      title: 'Profil',
      editProfile: 'Modifier le Profil',
      logout: 'Déconnexion',
    },
    guidelines: {
      title: 'Directives d’accessibilité',
      subtitle: 'Questions clés, principes et ressources pour un développement accessible.',
      essentials: {
        title: 'Essentiels pour les développeurs',
        intro:
          'Posez-vous ces questions pour garantir l’accessibilité de votre application. Chaque point fait référence à un principe clé ou à une directive WCAG.',
        questions: {
          semanticMarkup:
            'Balisage sémantique : Tous les éléments ont-ils le balisage sémantique approprié ?',
          inputLabels:
            'Étiquettes de saisie : Chaque champ et groupe de champs a-t-il une étiquette descriptive ?',
          focus:
            'Focus : Un indicateur est-il visible lors du focus clavier, et l’ordre de tabulation est-il logique ?',
          keyboard:
            'Clavier : Tous les éléments interactifs sont-ils accessibles et activables au clavier ?',
          names: 'Noms : Tous les contrôles interactifs ont-ils un nom accessible et descriptif ?',
          roles:
            'Rôles : Tous les widgets personnalisés ont-ils le bon rôle (ex : lien, bouton, onglet) ?',
          dynamicUpdates:
            'Mises à jour dynamiques : Toutes les mises à jour (y compris les erreurs) sont-elles annoncées aux technologies d’assistance ?',
          colors: 'Couleurs : Le contraste des couleurs est-il suffisant ?',
          layouts:
            'Mises en page : Les mises en page s’adaptent-elles à différentes largeurs de fenêtre et tailles de texte ?',
          images: 'Images : Les images et icônes ont-elles un texte alternatif approprié ?',
        },
        explanations: {
          semanticMarkup: 'Utilisez des éléments sémantiques pour les régions et le contenu.',
          inputLabels: 'Fournissez des étiquettes et instructions accessibles.',
          focus: 'Fournissez un focus logique et visible.',
          keyboard: 'Prise en charge de l’interaction clavier.',
          names: 'Les widgets personnalisés doivent avoir des noms accessibles.',
          roles: 'Fournissez le nom, le rôle et la valeur.',
          dynamicUpdates: 'Annoncez les changements dynamiques de contenu.',
          colors: 'Évitez de vous fier uniquement à la couleur.',
          layouts: 'Favorisez la flexibilité et l’adaptation.',
          images: 'Fournissez des images accessibles.',
        },
        examples: {
          headingStructure: 'Utiliser la structure des titres',
          mainLandmark: 'Créer une zone principale (landmark)',
          descriptiveInputLabels: 'Créer des étiquettes descriptives',
          requiredFields: 'Indiquer les champs obligatoires',
          focusOrder: 'Définir l’ordre de focus pour les éléments interactifs',
          linkFocus: 'Indiquer le focus sur les liens/paragraphes',
          manageFocus: 'Gérer le focus et les éléments inactifs',
          accessibleModals: 'Créer des dialogues modaux accessibles',
          expandableSections: 'Créer des sections extensibles accessibles',
          customKeyboardControls: 'Créer des contrôles personnalisés accessibles au clavier',
          accessibleNames: 'Fournir des noms accessibles pour les boutons',
          autocomplete: 'Contrôles de saisie avec autocomplétion',
          liveRegions: 'Retour de formulaire avec régions live',
          requiredFieldsNoColor: 'Indiquer les champs obligatoires sans se fier à la couleur',
          currentPageNoColor: 'Indiquer la page courante sans se fier à la couleur',
          textResizing: 'Permettre le redimensionnement du texte',
          iconInfo:
            'Fournir des informations sur les icônes aux utilisateurs de technologies d’assistance',
          altText: 'Fournir un texte alternatif utile',
        },
        resources: {
          title: 'Ressources utiles',
          appt: 'Appt.org : Guide et statistiques sur l’accessibilité',
          silktide: 'Silktide : WCAG pour les débutants',
          w3c: 'W3C : Documentation officielle WCAG',
          medium: 'Medium : Guide complet sur l’accessibilité',
          medium2: 'Medium : Introduction à l’accessibilité',
        },
      },
      successCriteria: {
        description:
          'C’est ici que les choses deviennent concrètes. Les critères de succès sont les points de contrôle qui vous indiquent comment rendre votre site plus inclusif. Ils sont divisés en trois niveaux :',
        levelA: 'A (essentiels de base)',
        levelAA: 'AA (l’exigence légale dans la plupart des pays)',
        levelAAA: 'AAA (l’excellence ultime).',
      },
      principles: {
        perceivable:
          'Perceptible : Les informations et composants de l’interface doivent être présentés de façon perceptible par tous.',
        operable:
          'Opérable : Les composants de l’interface et la navigation doivent être utilisables.',
        understandable:
          'Compréhensible : Les informations et le fonctionnement de l’interface doivent être compréhensibles.',
        robust:
          'Robuste : Le contenu doit être suffisamment robuste pour être interprété de manière fiable par une grande variété d’agents utilisateurs, y compris les technologies d’assistance.',
      },
      sections: {
        successCriteria: 'Critères de succès en accessibilité',
        principles: 'Les 4 principes de l’accessibilité',
        essentials: 'Essentiels pour les développeurs',
        resources: 'Ressources utiles',
      },
    },
  },
  accessibility: {
    complianceLevels: 'Niveaux de Conformité',
    features: 'Fonctionnalités',
    levels: {
      A: {
        name: 'A',
        description: 'Niveau minimum de conformité',
      },
      AA: {
        name: 'AA',
        description: 'Niveau standard de conformité',
      },
      AAA: {
        name: 'AAA',
        description: 'Niveau amélioré de conformité',
      },
      none: {
        name: 'Aucun',
        description: "Aucune exigence d'accessibilité",
      },
    },
    feature: {
      wcagCompliance: {
        title: 'Conformité WCAG',
        description: 'Apprenez et implémentez les directives WCAG 2.1 à tous les niveaux',
      },
      componentsSamples: {
        title: 'Exemples de Composants',
        description: "Exemples interactifs de composants d'interface accessibles",
      },
      userTesting: {
        title: 'Tests Utilisateur',
        description: "Outils et directives pour les tests d'accessibilité utilisateur",
      },
    },
    preferences: {
      title: 'Préférences',
      description: "Personnalisez l'accessibilité et l'expérience de l'application",
      fontSize: {
        title: 'Taille du texte',
        description: "Ajustez la taille du texte affiché dans l'application",
      },
      theme: {
        title: 'Thème',
        description: 'Passez du mode clair au mode sombre',
      },
      contrast: {
        title: 'Mode contraste élevé',
        description:
          'Activez un schéma de couleurs à contraste élevé pour une meilleure visibilité',
      },
      reduceMotion: {
        title: 'Réduire les animations',
        description: 'Réduisez les effets de mouvement et les animations',
      },
      screenReader: {
        title: "Lecteur d'écran",
        description: "Améliore la compatibilité avec les lecteurs d'écran",
      },
      language: {
        title: 'Langue',
        description: "Choisissez la langue de l'application",
      },
      textToSpeech: {
        title: 'Synthèse vocale',
        description: 'Activez la lecture vocale du contenu sélectionné',
      },
      haptics: {
        title: 'Retour haptique',
        description: 'Activer ou désactiver les vibrations',
      },
    },
    tools: {
      nativeAccessibilityEngine: {
        name: 'Native Accessibility Engine',
        description: 'Étiquettes manquantes, rôles, contraste',
        useCase: 'Vérificateur CLI pour les props d’accessibilité',
        guidelines: 'WCAG, ARIA',
        usage: 'À exécuter en dev ou test. Détection précoce des problèmes',
        free: 'Gratuit',
      },
      axeDevtoolsReactNative: {
        name: 'Axe DevTools React Native (Deque)',
        description: 'SDK pour violations WCAG, scans dans l’app',
        useCase: 'Ajoutez le SDK à votre projet RN. Analyse automatique poussée',
        guidelines: 'WCAG, Section 508',
        usage: 'Ajoutez le SDK à votre projet RN. Analyse automatique poussée',
        free: 'Gratuit / Payant',
      },
      jestTestingLibraryAxe: {
        name: 'Jest + @testing-library/react-native + jest-axe',
        description: 'Balisage sémantique, étiquettes',
        useCase: 'Assertions a11y au niveau unitaire',
        guidelines: 'WCAG, ARIA',
        usage: 'Dans votre suite de tests. Intégration CI',
        free: 'Gratuit',
      },
      appiumAxeCore: {
        name: 'Appium + Axe-core',
        description: 'Navigation, rôles, structure',
        useCase: 'Tests automatisés multiplateformes',
        guidelines: 'WCAG, Section 508',
        usage: 'Utilisez Appium + plugins. Automatisation Android + iOS',
        free: 'Gratuit',
      },
      earlgreyDetox: {
        name: 'EarlGrey + Detox (iOS)',
        description: 'Focus lecteur d’écran, étiquettes',
        useCase: 'Tests E2E avec support accessibilité',
        guidelines: 'WCAG',
        usage: 'Flows Detox personnalisés. Validation UI iOS',
        free: 'Gratuit',
      },
      accessibilityInspectorXcode: {
        name: 'Accessibility Inspector (Xcode)',
        description: 'Cibles tactiles, étiquettes, contraste',
        useCase: 'Inspecteur visuel des éléments a11y',
        guidelines: 'WCAG, Directives iOS',
        usage: 'Intégré à Xcode. Audit manuel iOS',
        free: 'Gratuit',
      },
      accessibilityScannerAndroid: {
        name: 'Accessibility Scanner (Android)',
        description: 'Cibles tactiles, contraste, étiquettes manquantes',
        useCase: 'Scanner visuel pour l’accessibilité UI',
        guidelines: 'WCAG, Directives Android',
        usage: 'Téléchargez depuis Play Store. Audit UI Android in-app',
        free: 'Gratuit',
      },
      voiceoverIos: {
        name: 'VoiceOver (iOS)',
        description: 'Support lecteur d’écran',
        useCase: 'Simule l’expérience utilisateur aveugle',
        guidelines: 'WCAG',
        usage: 'Activez dans les réglages iOS. Validation lecteur d’écran (iOS)',
        free: 'Gratuit',
      },
      talkbackAndroid: {
        name: 'TalkBack (Android)',
        description: 'Support lecteur d’écran',
        useCase: 'Retour vocal lors des interactions',
        guidelines: 'WCAG',
        usage: 'Activez dans les réglages Android. Validation lecteur d’écran (Android)',
        free: 'Gratuit',
      },
      switchAccessSwitchControl: {
        name: 'Switch Access / Switch Control',
        description: 'Support entrée externe',
        useCase: 'Simuler la navigation pour handicap moteur',
        guidelines: 'WCAG',
        usage: 'Activez dans les réglages iOS/Android. Test accessibilité motrice',
        free: 'Gratuit',
      },
      zoomScreenMagnifier: {
        name: 'Zoom / Loupe d’écran',
        description: 'Accessibilité visuelle',
        useCase: 'Tester le zoom pour malvoyants',
        guidelines: 'WCAG',
        usage: 'Activez dans les réglages accessibilité. Lisibilité & zoom',
        free: 'Gratuit',
      },
      colorContrastAnalyzer: {
        name: 'Color Contrast Analyzer / ColorSlurp',
        description: 'Contraste des couleurs',
        useCase: 'Vérifie la lisibilité et le contraste du texte',
        guidelines: 'WCAG',
        usage: 'Utilisez sur l’appareil ou en ligne. Test couleur UI',
        free: 'Gratuit',
      },
      reduceMotion: {
        name: 'Réduire les animations',
        description: 'Réduire les animations',
        useCase: 'Réduire les animations',
        guidelines: 'WCAG',
        usage: 'Réduire les animations',
        free: 'Gratuit',
      },
    },
    components: {
      examples: 'Exemples',
      requirements: 'Exigences',
      alerts: {
        title: 'Alertes',
        description:
          "Les alertes accessibles informent les utilisateurs d'informations importantes ou de changements d'état.",
        requirements: {
          A: {
            '1': 'Utiliser accessibilityRole="alert" sur les composants d\'alerte personnalisés (pas Alert.alert() natif qui n\'expose pas cela)',
            '2': "Fournir un accessibilityLabel clair et descriptif pour les titres et boutons d'alerte",
            '3': 'Utiliser AccessibilityInfo.announceForAccessibility() pour annoncer les messages critiques (surtout pour les alertes personnalisées)',
            '4': "S'assurer que le focus clavier ou lecteur d'écran est déplacé programmatiquement vers le contenu de l'alerte quand elle apparaît",
          },
          AA: {
            '1': "Écrire les messages d'alerte en langage simple — pas de jargon ou de termes ambigus",
            '2': "Fournir suffisamment de temps avant la fermeture automatique (ex: éviter la disparition instantanée sauf si déclenchée par l'utilisateur)",
            '3': 'Utiliser des étiquettes de bouton claires et orientées action comme "Réessayer" au lieu de juste "OK"',
            '4': "Quand l'alerte se ferme, s'assurer que le focus revient à un endroit significatif (ex: le dernier bouton ou champ focalisé)",
          },
          AAA: {
            '1': 'Implémenter des niveaux de priorité d\'alerte (ex: distinguer entre "info", "avertissement", "erreur" avec des annonces ou visuels)',
            '2': 'Supporter les actions de fermeture en utilisant accessibilityActions (pour les alertes personnalisées, surtout dans les modales)',
            '3': 'Fournir aux utilisateurs l\'option de sauvegarder ou réviser les alertes importantes plus tard (ex: en enregistrant les alertes dans un écran "Activité")',
            '4': 'Supporter plusieurs méthodes de notification comme le retour haptique (Haptics.notificationAsync()), le son, ou la vibration',
          },
        },
      },
      buttons: {
        title: 'Boutons',
        description:
          'Les boutons accessibles sont utilisables par tous et fournissent un retour clair.',
        requirements: {
          A: {
            '1': 'Utiliser accessibilityRole="button" pour tous les boutons',
            '2': "Fournir un accessibilityLabel clair pour l'objectif du bouton",
            '3': "S'assurer que l'état du bouton est communiqué via accessibilityState",
            '4': 'Rendre tout le bouton tactile, pas seulement le texte',
          },
          AA: {
            '1': 'Définir accessibilityHint pour les fonctions de bouton complexes',
            '2': "S'assurer d'une taille de cible tactile minimale de 44×44 points",
            '3': 'Fournir un indicateur de focus visible quand le bouton est sélectionné',
            '4': "Maintenir un rapport de contraste de 4,5:1 entre le texte et l'arrière-plan",
          },
          AAA: {
            '1': 'Implémenter accessibilityAction personnalisé pour les boutons',
            '2': 'Fournir un retour haptique pour les pressions de bouton',
            '3': 'Supporter les raccourcis clavier pour les boutons principaux',
            '4': "S'assurer que les boutons sont utilisables avec diverses méthodes de saisie",
          },
        },
      },
      cards: {
        title: 'Cartes',
        description:
          "Les cartes accessibles regroupent des informations liées et sont navigables par les technologies d'assistance.",
        requirements: {
          A: {
            '1': 'Rendre toute la carte tactile si elle est interactive',
            '2': 'Fournir un accessibilityLabel descriptif',
            '3': 'Utiliser un accessibilityRole approprié (bouton si tactile)',
            '4': "S'assurer d'une hiérarchie de titres appropriée dans le contenu de la carte",
          },
          AA: {
            '1': "S'assurer d'une indication de focus appropriée quand la carte est sélectionnée",
            '2': "Ajouter accessibilityHint sur ce qui se passe lors de l'interaction",
            '3': "S'assurer que la mise en page de la carte est responsive pour différentes tailles de texte",
            '4': 'Fournir un contraste suffisant pour le contenu de la carte',
          },
          AAA: {
            '1': 'Implémenter des actions de balayage personnalisées avec accessibilité',
            '2': "Fournir des actions d'accessibilité contextuelles",
            '3': 'Supporter la navigation au clavier entre les cartes',
            '4': 'Inclure un retour haptique pour les interactions avec les cartes',
          },
        },
      },
      charts: {
        title: 'Graphiques',
        description:
          'Les graphiques accessibles fournissent une visualisation de données perceptible par tous les utilisateurs.',
        requirements: {
          A: {
            '1': 'Fournir des alternatives textuelles pour les données du graphique',
            '2': "S'assurer que le graphique ne se fie pas uniquement à la couleur pour transmettre l'information",
            '3': "Rendre les données du graphique accessibles via les lecteurs d'écran",
            '4': "Utiliser accessibilityLabel pour décrire l'objectif du graphique",
          },
          AA: {
            '1': 'Ajouter des descriptions détaillées des données',
            '2': 'Fournir une représentation tabulaire alternative',
            '3': 'Inclure un retour audio pour la sélection de points de données',
            '4': 'Supporter la navigation de focus entre les éléments du graphique',
          },
          AAA: {
            '1': 'Fournir une exploration interactive des points de données',
            '2': 'Supporter plusieurs formats de représentation',
            '3': 'Implémenter la sonification des données du graphique',
            '4': "Permettre la personnalisation de l'apparence du graphique pour l'accessibilité",
            '5': 'Fournir la langue des signes ou des descriptions visuelles pour les graphiques vidéo intégrés',
          },
        },
      },
      checkboxes: {
        title: 'Cases à cocher',
        description:
          'Les cases à cocher accessibles sont utilisables, clairement étiquetées et indiquent leur état.',
        requirements: {
          A: {
            '1': 'Définir accessibilityRole="checkbox"',
            '2': 'Fournir un accessibilityLabel clair',
            '3': "Utiliser accessibilityState={{ checked }} pour indiquer l'état",
            '4': "S'assurer que toute la zone de la case à cocher est tactile",
          },
          AA: {
            '1': 'Ajouter accessibilityHint pour le comportement attendu',
            '2': "S'assurer d'une taille de cible tactile minimale de 44×44 points",
            '3': 'Fournir un contraste suffisant pour les états de la case à cocher',
            '4': 'Supporter le redimensionnement du texte sans casser la mise en page',
          },
          AAA: {
            '1': 'Implémenter des raccourcis clavier pour cocher/décocher',
            '2': "Ajouter un retour haptique pour les changements d'état",
            '3': 'Supporter le groupement de cases à cocher liées',
            '4': "Fournir des actions d'accessibilité personnalisées",
          },
        },
      },
      confirmationDialog: {
        title: 'Dialogue de Confirmation',
        description:
          'Les dialogues de confirmation accessibles fournissent des choix clairs et préviennent les actions accidentelles.',
        requirements: {
          A: {
            '1': 'Le dialogue est modal et piège le focus',
            '2': "Le dialogue a des boutons d'action clairs",
          },
          AA: {
            '1': 'Le dialogue offre un contraste de couleurs suffisant',
            '2': "Le dialogue est annoncé aux lecteurs d'écran",
          },
          AAA: {
            '1': "Le dialogue prend en charge l'opération au clavier uniquement",
            '2': "Le dialogue fournit un contexte détaillé pour les technologies d'assistance",
          },
        },
      },
      dataTable: {
        title: 'Tableaux de données',
        description:
          'Les tableaux de données accessibles fournissent des informations structurées navigables et compréhensibles par tous les utilisateurs.',
        requirements: {
          A: {
            '1': 'Utiliser un balisage de tableau approprié avec des en-têtes de ligne/colonne',
            '2': 'Fournir une légende ou un résumé de tableau',
            '3': "S'assurer d'un ordre de lecture approprié pour les lecteurs d'écran",
            '4': "Associer les cellules de données avec les cellules d'en-tête",
          },
          AA: {
            '1': 'Supporter la navigation au clavier entre les cellules',
            '2': "Implémenter le tri de colonnes avec des annonces d'accessibilité",
            '3': 'Fournir des mises à jour de statut pour les changements de contenu dynamiques',
            '4': "Inclure des annonces d'index de ligne et de colonne",
          },
          AAA: {
            '1': 'Supporter plusieurs méthodes de sélection',
            '2': 'Fournir des vues alternatives (carte, liste) pour les tableaux complexes',
            '3': 'Permettre la configuration personnalisée de la visibilité des colonnes',
            '4': 'Inclure une aide contextuelle pour les interactions avec les tableaux',
          },
        },
      },
      dateTimePicker: {
        title: 'Sélecteurs de date et heure',
        description:
          'Les sélecteurs de date et heure accessibles permettent aux utilisateurs de sélectionner des dates et heures via diverses méthodes de saisie.',
        requirements: {
          A: {
            '1': 'Fournir des étiquettes claires pour les sélecteurs de date et heure',
            '2': "S'assurer que les dates et heures sont annoncées correctement par les lecteurs d'écran",
          },
          AA: {
            '1': 'Supporter plusieurs formats de date',
            '2': "Fournir une prévention d'erreur pour les dates invalides",
            '3': "Annoncer les changements de date sélectionnée aux lecteurs d'écran",
            '4': 'Implémenter une indication claire de la date actuelle/sélectionnée',
            '5': "S'assurer de la taille de cible tactile correcte pour les contrôles Picker",
          },
          AAA: {
            '1': 'Supporter la saisie vocale pour les dates et heures',
            '2': "Fournir des options de date relatives (aujourd'hui, demain, semaine prochaine)",
            '3': "Se souvenir du format de date préféré de l'utilisateur",
            '4': 'Inclure des informations contextuelles du calendrier (vacances, événements)',
          },
        },
      },
      errorValidation: {
        title: "Validation d'erreur",
        description:
          "La validation d'erreur accessible fournit un retour clair et des conseils pour corriger les erreurs de saisie.",
        requirements: {
          A: {
            '1': 'Identifier les erreurs spécifiques sous forme textuelle',
            '2': "Fournir des messages d'erreur en texte (pas seulement en couleur)",
            '3': "Associer les messages d'erreur aux champs de formulaire",
            '4': "Offrir des suggestions de correction quand c'est possible",
          },
          AA: {
            '1': "Implémenter la validation en temps réel quand c'est approprié",
            '2': 'Fournir une aide contextuelle pour les erreurs',
            '3': "S'assurer que les messages d'erreur sont annoncés aux lecteurs d'écran",
            '4': 'Inclure des suggestions pour corriger les erreurs de validation',
          },
          AAA: {
            '1': "Fournir plusieurs formats pour les informations d'erreur",
            '2': 'Supporter la correction guidée des erreurs',
            '3': 'Se souvenir et auto-corriger les erreurs communes des utilisateurs',
            '4': 'Inclure des exemples contextuels de saisie correcte',
          },
        },
      },
      focusManagement: {
        title: 'Gestion du Focus',
        description:
          'Une gestion appropriée du focus assure une navigation logique et prévient les pièges de focus.',
        requirements: {
          A: {
            '1': 'Le focus suit un ordre de tabulation logique',
            '2': 'Le focus est visible et distinguable',
          },
          AA: {
            '1': 'Le focus offre un contraste de couleurs suffisant',
            '2': 'Le focus est déterminable par programme',
          },
          AAA: {
            '1': 'Le focus prend en charge les modèles de navigation personnalisés',
            '2': "Le focus fournit un contexte supplémentaire pour les lecteurs d'écran",
          },
        },
      },
      images: {
        title: 'Images',
        description:
          'Les images accessibles fournissent des alternatives significatives pour les utilisateurs qui ne peuvent pas voir le contenu visuel.',
        requirements: {
          A: {
            '1': 'Fournir un texte alternatif pour toutes les images non décoratives',
            '2': 'Utiliser un texte alternatif nul pour les images décoratives',
            '3': "S'assurer que les alternatives textuelles transmettent l'objectif de l'image",
            '4': 'Inclure des noms accessibles pour les images actionnables',
          },
          AA: {
            '1': 'Fournir des descriptions étendues pour les images complexes',
            '2': "S'assurer d'un contraste suffisant pour le contenu d'image informatif",
            '3': "Supporter le redimensionnement d'image sans perte de fonction",
            '4': 'Inclure le contexte dans le texte alternatif pour les images ambiguës',
          },
          AAA: {
            '1': "Fournir plusieurs formats d'information complexe",
            '2': "Supporter les préférences utilisateur pour l'affichage d'image",
            '3': 'Inclure des descriptions audio pour les images informatives',
            '4': 'Fournir des alternatives en langue des signes pour le contenu visuel clé',
          },
        },
      },
      links: {
        title: 'Liens',
        description:
          'Les liens accessibles sont clairement identifiables et fournissent des informations significatives sur leur destination.',
        requirements: {
          A: {
            '1': 'Fournir un texte de lien descriptif',
            '2': "S'assurer que les liens sont distinguables du texte environnant",
            '3': 'Rendre toute la zone de lien cliquable/tactile',
            '4': 'Éviter les textes de lien génériques comme "cliquez ici"',
          },
          AA: {
            '1': "Indiquer quand les liens s'ouvrent dans de nouvelles fenêtres/onglets",
            '2': "S'assurer de l'identification cohérente des liens",
            '3': 'Fournir une indication de focus visuel pour les liens',
            '4': 'Différencier entre les liens visités et non visités',
          },
          AAA: {
            '1': 'Fournir des informations sur la destination du lien avant activation',
            '2': "Supporter l'activation par raccourci clavier des liens communs",
            '3': 'Grouper les liens liés pour une navigation plus facile',
            '4': "Permettre la personnalisation de l'apparence des liens",
          },
        },
      },
      lists: {
        title: 'Listes',
        description:
          "Les listes accessibles organisent l'information de manière structurée navigable par les technologies d'assistance.",
        requirements: {
          A: {
            '1': 'Utiliser un balisage de liste approprié (ordonnée/non ordonnée)',
            '2': 'Maintenir un ordre de lecture logique des éléments de liste',
            '3': "Identifier l'objectif de la liste avec un titre approprié",
            '4': "S'assurer que tous les éléments de liste interactifs sont focalisables",
          },
          AA: {
            '1': 'Supporter la navigation au clavier entre les éléments de liste',
            '2': "Fournir une indication visuelle de l'élément de liste actuel",
            '3': "Inclure les informations de liste dans les annonces du lecteur d'écran",
            '4': 'Supporter les listes réductibles/expandables avec ARIA approprié',
          },
          AAA: {
            '1': 'Permettre la personnalisation de la présentation de liste',
            '2': 'Supporter plusieurs méthodes de sélection pour les éléments de liste',
            '3': 'Fournir des vues alternatives pour les listes complexes',
            '4': 'Inclure la fonctionnalité glisser-déposer avec des alternatives clavier',
          },
        },
      },
      menu: {
        title: 'Menu',
        description:
          'Les menus accessibles fournissent des options de navigation utilisables par tous les utilisateurs.',
        requirements: {
          A: {
            '1': "S'assurer que tous les éléments de menu sont accessibles au clavier",
            '2': 'Fournir des étiquettes descriptives pour les éléments de menu',
            '3': 'Utiliser des rôles appropriés pour les menus et éléments',
            '4': 'Supporter la fermeture des menus avec la touche ESC',
          },
          AA: {
            '1': 'Implémenter la navigation par touches fléchées dans les menus',
            '2': 'Supporter la navigation de sous-menu au clavier',
            '3': 'Fournir des indicateurs de focus visuel pour les éléments de menu',
            '4': "Annoncer les changements d'état de menu aux lecteurs d'écran",
          },
          AAA: {
            '1': 'Supporter les raccourcis clavier pour les éléments de menu communs',
            '2': "Permettre la personnalisation de l'organisation du menu",
            '3': 'Fournir une aide contextuelle pour la fonctionnalité du menu',
            '4': "Supporter l'activation vocale des éléments de menu",
          },
        },
      },
      progressIndicators: {
        title: 'Indicateurs de progression',
        description:
          'Les indicateurs de progression accessibles fournissent un retour sur les processus et opérations en cours.',
        requirements: {
          A: {
            '1': 'Fournir des alternatives textuelles pour les indicateurs visuels',
            '2': 'Utiliser des rôles ARIA pour les éléments de progression',
            '3': "S'assurer que la progression peut être déterminée programmatiquement",
            '4': "Inclure des descriptions d'état de début et de fin",
          },
          AA: {
            '1': "Annoncer les mises à jour de progression aux lecteurs d'écran",
            '2': 'Fournir le temps de completion estimé quand disponible',
            '3': "S'assurer d'un contraste de couleur suffisant pour les indicateurs visuels",
            '4': 'Inclure des valeurs numériques avec les indicateurs visuels',
          },
          AAA: {
            '1': 'Supporter les notifications de progression personnalisables',
            '2': "Fournir des formats alternatifs pour l'indication de progression",
            '3': 'Permettre le contrôle de la fréquence de mise à jour de progression',
            '4': 'Inclure des informations de progression contextuelles',
          },
        },
      },
      radioButton: {
        title: 'Boutons radio',
        description:
          "Les boutons radio accessibles permettent aux utilisateurs de sélectionner une option d'un groupe mutuellement exclusif.",
        requirements: {
          A: {
            '1': 'Grouper les boutons radio liés programmatiquement',
            '2': 'Fournir une étiquette de groupe pour les ensembles de boutons radio',
            '3': 'Supporter la navigation au clavier dans le groupe',
            '4': "S'assurer que chaque bouton radio a une étiquette descriptive",
          },
          AA: {
            '1': 'Implémenter une gestion de focus appropriée dans les groupes',
            '2': "Fournir une indication visuelle de l'état sélectionné",
            '3': "Annoncer les changements de sélection aux lecteurs d'écran",
            '4': 'Supporter la navigation par touches fléchées entre les options',
          },
          AAA: {
            '1': 'Supporter les méthodes de sélection alternatives',
            '2': 'Fournir des exemples contextuels pour les options radio',
            '3': 'Permettre la personnalisation de la présentation des boutons radio',
            '4': "Se souvenir des sélections communes de l'utilisateur",
          },
        },
      },
      segmentedControl: {
        title: 'Contrôles segmentés',
        description:
          'Les contrôles segmentés accessibles permettent aux utilisateurs de basculer entre des options ou vues liées.',
        requirements: {
          A: {
            '1': "S'assurer que chaque segment est focalisable au clavier",
            '2': 'Fournir des étiquettes descriptives pour chaque segment',
            '3': 'Utiliser un rôle approprié (tablist/radiogroup)',
            '4': "Indiquer l'état sélectionné programmatiquement",
          },
          AA: {
            '1': 'Supporter la navigation par touches fléchées entre les segments',
            '2': 'Fournir des indicateurs de focus visuel pour les segments',
            '3': "Annoncer les changements de sélection aux lecteurs d'écran",
            '4': "S'assurer d'un contraste suffisant pour l'état sélectionné",
          },
          AAA: {
            '1': 'Supporter les méthodes de sélection alternatives',
            '2': "Permettre la personnalisation de l'apparence des segments",
            '3': 'Se souvenir des sélections utilisateur entre les sessions',
            '4': 'Fournir une aide contextuelle pour les options de segment',
          },
        },
      },
      sliders: {
        title: 'Curseurs',
        description:
          "Les curseurs accessibles permettent aux utilisateurs d'ajuster des valeurs dans une plage en utilisant diverses méthodes de saisie.",
        requirements: {
          A: {
            '1': 'Fournir des alternatives textuelles pour la valeur actuelle du curseur',
            '2': "Supporter l'ajustement au clavier des valeurs",
            '3': 'Inclure les informations de valeur min/max',
            '4': "Étiqueter clairement l'objectif du curseur",
          },
          AA: {
            '1': 'Supporter la navigation par étapes pour la précision',
            '2': 'Fournir une indication visuelle et programmatique de la valeur actuelle',
            '3': "Annoncer les changements de valeur aux lecteurs d'écran",
            '4': "Inclure les informations de valeur dans l'étiquette du curseur",
          },
          AAA: {
            '1': "Supporter les méthodes de saisie alternatives pour l'ajustement de valeur",
            '2': 'Fournir un retour haptique pour les changements de valeur',
            '3': "Permettre la personnalisation de l'apparence et du comportement du curseur",
            '4': 'Inclure des informations de valeur contextuelles (ex: "50% volume")',
          },
        },
      },
      switches: {
        title: 'Interrupteurs',
        description:
          'Les interrupteurs accessibles permettent aux utilisateurs de basculer entre deux états.',
        requirements: {
          A: {
            '1': "L'interrupteur est utilisable au clavier",
            '2': "L'interrupteur a une étiquette descriptive",
          },
          AA: {
            '1': "L'état de l'interrupteur est déterminable par programme",
            '2': "L'interrupteur affiche un indicateur de focus visible",
          },
          AAA: {
            '1': "L'interrupteur prend en charge les états personnalisés et les attributs ARIA",
            '2': "L'interrupteur fournit un contexte supplémentaire pour les lecteurs d'écran",
          },
        },
      },
      textInputs: {
        title: 'Champs de texte',
        description:
          'Les champs de texte accessibles fournissent un étiquetage clair et un support pour diverses méthodes de saisie.',
        requirements: {
          A: {
            '1': 'Associer les étiquettes aux champs de texte',
            '2': "Fournir un texte d'espace réservé descriptif",
            '3': "Supporter l'interaction au clavier",
            '4': 'Indiquer les champs requis',
          },
          AA: {
            '1': "Fournir des messages d'erreur pour la saisie invalide",
            '2': "S'assurer que les messages d'erreur sont annoncés aux lecteurs d'écran",
            '3': "Supporter l'autocomplétion quand c'est approprié",
            '4': 'Maintenir les étiquettes visibles pendant le focus de saisie',
          },
          AAA: {
            '1': 'Fournir une aide contextuelle pour les champs de saisie',
            '2': "Se souvenir des valeurs précédemment saisies quand c'est approprié",
            '3': 'Supporter les méthodes de saisie alternatives',
            '4': 'Inclure des conseils de format de saisie en ligne',
          },
        },
      },
      tabs: {
        title: 'Onglets',
        description:
          'Les onglets accessibles organisent le contenu en sections logiques navigables par tous les utilisateurs.',
        requirements: {
          A: {
            '1': 'Utiliser des rôles tab/tabpanel appropriés',
            '2': 'Associer les onglets à leurs panneaux programmatiquement',
            '3': "S'assurer de la navigation au clavier entre les onglets",
            '4': 'Fournir des étiquettes descriptives pour chaque onglet',
          },
          AA: {
            '1': "Supporter la navigation par touches fléchées dans la liste d'onglets",
            '2': "Indiquer l'onglet actuel visuellement et programmatiquement",
            '3': "Annoncer les changements d'onglet aux lecteurs d'écran",
            '4': "S'assurer que les onglets sont visibles dans le viewport quand activés",
          },
          AAA: {
            '1': "Se souvenir de l'onglet actif entre les sessions",
            '2': "Supporter les méthodes de sélection d'onglet alternatives",
            '3': "Fournir une aide contextuelle pour la fonctionnalité d'onglet",
            '4': "Permettre la personnalisation de la présentation d'onglet",
          },
        },
      },
      deviceOrientation: {
        title: "Orientation de l'Appareil",
        description:
          "Support pour différentes orientations d'appareil avec des considérations d'accessibilité.",
        requirements: {
          A: {
            '1': "Le contenu s'adapte aux différentes orientations",
            '2': "Les changements d'orientation sont annoncés aux technologies d'assistance",
          },
          AA: {
            '1': "Les changements d'orientation offrent un contraste suffisant",
            '2': "Les changements d'orientation maintiennent la position du focus",
          },
          AAA: {
            '1': "Les changements d'orientation prennent en charge les modèles de navigation personnalisés",
            '2': "Les changements d'orientation fournissent un contexte détaillé pour les lecteurs d'écran",
          },
        },
      },
      groupingControls: {
        title: 'Groupement de contrôles',
        description:
          "Les contrôles de groupement accessibles organisent les éléments d'interface liés pour une meilleure navigation et compréhension.",
        requirements: {
          A: {
            '1': 'Grouper les contrôles liés visuellement et programmatiquement',
            '2': 'Fournir des étiquettes de groupe pour les contrôles liés',
            '3': "S'assurer d'un ordre d'onglet logique dans les groupes",
            '4': 'Utiliser un style cohérent pour les groupes de contrôles',
          },
          AA: {
            '1': 'Implémenter des raccourcis clavier pour naviguer entre les groupes',
            '2': "Fournir des instructions au niveau du groupe quand c'est approprié",
            '3': 'Permettre la réduction/expansion des groupes de contrôles',
            '4': "S'assurer d'une attribution de rôle ARIA appropriée pour les groupes",
          },
          AAA: {
            '1': "Supporter l'arrangement personnalisé des groupes de contrôles",
            '2': 'Fournir une aide contextuelle pour chaque groupe de contrôles',
            '3': "Se souvenir de l'état du groupe entre les sessions",
            '4': 'Supporter plusieurs méthodes de sélection dans les groupes',
          },
        },
      },
      headingLevel: {
        title: 'Niveau de Titre',
        description:
          'Hiérarchie appropriée des titres pour la structure et la navigation du document.',
        requirements: {
          A: {
            '1': 'Les titres suivent une hiérarchie logique (h1, h2, h3, etc.)',
            '2': 'Les titres ont un texte descriptif',
          },
          AA: {
            '1': 'Les titres offrent un contraste de couleurs suffisant',
            '2': 'Les titres sont déterminables par programme',
          },
          AAA: {
            '1': 'Les titres prennent en charge les modèles de navigation personnalisés',
            '2': "Les titres fournissent un contexte détaillé pour les lecteurs d'écran",
          },
        },
      },
      largeContentViewer: {
        title: 'Visualiseur de Contenu Large',
        description:
          'Visualiseur accessible pour les zones de contenu larges avec une navigation appropriée.',
        requirements: {
          A: {
            '1': 'Le contenu large est navigable au clavier',
            '2': 'Le contenu large a des étiquettes descriptives',
          },
          AA: {
            '1': 'Le contenu large offre un contraste de couleurs suffisant',
            '2': 'Le contenu large prend en charge le zoom et le défilement',
          },
          AAA: {
            '1': 'Le contenu large prend en charge les modèles de navigation personnalisés',
            '2': "Le contenu large fournit un contexte détaillé pour les lecteurs d'écran",
          },
        },
      },
      pickers: {
        title: 'Sélecteurs',
        description:
          'Les sélecteurs accessibles permettent aux utilisateurs de sélectionner parmi des options en utilisant diverses méthodes de saisie.',
        requirements: {
          A: {
            '1': "S'assurer que toutes les options de sélecteur sont accessibles au clavier",
            '2': 'Fournir des étiquettes claires pour les sélecteurs et options',
            '3': 'Supporter les contrôles de sélecteur natifs quand disponibles',
            '4': "Annoncer l'option sélectionnée aux lecteurs d'écran",
          },
          AA: {
            '1': 'Grouper les options liées dans des catégories logiques',
            '2': "Supporter la recherche/filtrage pour les longues listes d'options",
            '3': 'Fournir une indication visuelle de la sélection actuelle',
            '4': 'Inclure des instructions claires pour les sélecteurs multi-sélection',
          },
          AAA: {
            '1': 'Supporter les méthodes de sélection alternatives (ex: voix)',
            '2': 'Permettre la personnalisation de la présentation des options',
            '3': "Se souvenir des sélections communes de l'utilisateur",
            '4': 'Fournir une aide contextuelle pour les sélecteurs complexes',
          },
        },
      },
      popovers: {
        title: 'Popovers',
        description: 'Composants popover accessibles avec une gestion appropriée du focus.',
        requirements: {
          A: {
            '1': 'Les popovers sont utilisables au clavier',
            '2': 'Les popovers ont des étiquettes descriptives',
          },
          AA: {
            '1': 'Les popovers offrent un contraste de couleurs suffisant',
            '2': "Les popovers annoncent les changements d'état aux lecteurs d'écran",
          },
          AAA: {
            '1': 'Les popovers prennent en charge les états personnalisés et les attributs ARIA',
            '2': "Les popovers fournissent un contexte détaillé pour les lecteurs d'écran",
          },
        },
      },
      sheets: {
        title: 'Feuilles',
        description:
          'Les feuilles accessibles fournissent du contenu modal qui est correctement contenu et navigable.',
        requirements: {
          A: {
            '1': "S'assurer que la feuille est accessible au clavier",
            '2': 'Fournir un titre clair pour la feuille',
            '3': 'Supporter la fermeture de la feuille avec la touche ESC',
            '4': 'Inclure un rôle approprié (dialog)',
          },
          AA: {
            '1': 'Piéger le focus dans la feuille quand elle est ouverte',
            '2': "Annoncer l'ouverture/fermeture de la feuille aux lecteurs d'écran",
            '3': "S'assurer que la feuille est positionnée dans le viewport visuel",
            '4': 'Fournir un bouton de fermeture visible',
          },
          AAA: {
            '1': "Supporter les animations d'entrée/sortie personnalisables",
            '2': 'Se souvenir de la position/état de la feuille entre les sessions',
            '3': "Permettre plusieurs méthodes d'interaction pour la fermeture",
            '4': 'Fournir une aide contextuelle pour la fonctionnalité de la feuille',
          },
        },
      },
      webview: {
        title: 'WebView',
        description:
          "Les WebViews accessibles fournissent l'accès au contenu web dans le contexte de l'application.",
        requirements: {
          A: {
            '1': 'Fournir un titre décrivant le contenu WebView',
            '2': "S'assurer que le focus clavier peut entrer et sortir de WebView",
            '3': "Fournir des informations d'état de chargement",
            '4': "Inclure une solution de secours pour l'échec de chargement de contenu",
          },
          AA: {
            '1': "Annoncer les états de chargement WebView aux lecteurs d'écran",
            '2': "S'assurer que le contenu dans WebView est accessible",
            '3': 'Fournir un mécanisme pour actualiser le contenu WebView',
            '4': "Supporter la mise à l'échelle de contenu pour WebView",
          },
          AAA: {
            '1': 'Permettre la personnalisation de la présentation WebView',
            '2': 'Fournir des formats alternatifs pour le contenu WebView',
            '3': 'Supporter les préférences utilisateur pour le contenu WebView',
            '4': 'Inclure une aide contextuelle pour la fonctionnalité WebView',
          },
        },
      },
      video: {
        title: 'Vidéo',
        description:
          'Les vidéos accessibles fournissent des sous-titres, descriptions et contrôles pour tous les utilisateurs.',
        requirements: {
          A: {
            '1': 'Fournir des sous-titres pour tout le contenu audio',
            '2': 'Inclure des descriptions audio pour les informations visuelles',
            '3': "S'assurer que les contrôles du lecteur vidéo sont accessibles au clavier",
            '4': "Supporter la pause et l'arrêt de la vidéo",
          },
          AA: {
            '1': 'Supporter les sous-titres fermés qui peuvent être activés/désactivés',
            '2': "S'assurer que les contrôles restent visibles au focus",
            '3': 'Fournir une transcription pour le contenu vidéo',
            '4': 'Supporter la vitesse de lecture ajustable',
          },
          AAA: {
            '1': "Inclure une option d'interprétation en langue des signes",
            '2': 'Supporter les descriptions audio étendues',
            '3': "Permettre la personnalisation de l'apparence des sous-titres",
            '4': 'Fournir des formats alternatifs pour le contenu vidéo',
          },
        },
      },
      reduceMotion: {
        title: 'Réduire le mouvement',
        description:
          "Les contrôles de mouvement accessibles permettent aux utilisateurs de personnaliser les préférences d'animation et de mouvement.",
        requirements: {
          A: {
            '1': 'Respecter les paramètres de réduction de mouvement au niveau système',
            '2': 'Fournir des contrôles pour désactiver les animations non essentielles',
            '3': "S'assurer que toutes les fonctionnalités fonctionnent sans animation",
            '4': 'Éviter les animations auto-jouées plus longues que 5 secondes',
          },
          AA: {
            '1': 'Implémenter des alternatives de mouvement réduit pour les animations essentielles',
            '2': 'Fournir des paramètres de préférence utilisateur pour le mouvement',
            '3': "S'assurer que les animations ne clignotent pas plus de 3 fois par seconde",
            '4': 'Supporter la pause/arrêt de toutes les animations',
          },
          AAA: {
            '1': "Permettre un contrôle granulaire des types d'animation",
            '2': 'Se souvenir des préférences de mouvement utilisateur entre les sessions',
            '3': 'Fournir des représentations alternatives du contenu animé',
            '4': "Supporter la personnalisation de la vitesse et intensité d'animation",
          },
        },
      },
      timeLimits: {
        title: 'Limites de temps',
        description:
          'Les limites de temps accessibles fournissent aux utilisateurs un contrôle sur le contenu et les fonctionnalités sensibles au temps.',
        requirements: {
          A: {
            '1': "Permettre aux utilisateurs d'étendre les limites de temps quand elles sont présentes",
            '2': "Fournir un avertissement avant l'expiration du délai",
            '3': "Supporter la pause ou l'arrêt du contenu à temps limité",
            '4': "S'assurer qu'aucune fonctionnalité ne nécessite un timing spécifique",
          },
          AA: {
            '1': 'Permettre aux utilisateurs de désactiver complètement les limites de temps',
            '2': "Permettre aux utilisateurs de sauvegarder leur progression avant l'expiration",
            '3': 'Fournir des options pour étendre la session plusieurs fois',
            '4': "S'assurer que les actualisations de contenu ne perturbent pas la place de l'utilisateur",
          },
          AAA: {
            '1': 'Permettre aux utilisateurs de définir des préférences de temps personnelles',
            '2': "Fournir des options d'extension de temps personnalisables",
            '3': "Sauvegarder automatiquement la progression de l'utilisateur à intervalles réguliers",
            '4': "Supporter la reprise depuis l'état précédent après l'expiration",
          },
        },
      },
      gesturesAlternatives: {
        title: 'Alternatives aux gestes',
        description:
          'Les alternatives aux gestes accessibles fournissent plusieurs méthodes de saisie pour les utilisateurs qui ne peuvent pas utiliser les gestes tactiles.',
        requirements: {
          A: {
            '1': 'Fournir des alternatives de bouton pour tous les contrôles gestuels',
            '2': "S'assurer que toutes les fonctionnalités sont utilisables via tap/clic simple",
            '3': 'Inclure des étiquettes textuelles pour les actions gestuelles',
            '4': 'Supporter les alternatives clavier pour tous les gestes',
          },
          AA: {
            '1': "Implémenter l'activation à point unique pour les gestes complexes",
            '2': 'Fournir des indicateurs visuels pour les gestes disponibles',
            '3': 'Supporter la sensibilité gestuelle personnalisable',
            '4': 'Inclure un retour haptique pour la reconnaissance gestuelle',
          },
          AAA: {
            '1': 'Permettre aux utilisateurs de personnaliser ou désactiver les gestes',
            '2': 'Fournir plusieurs méthodes de saisie alternatives',
            '3': 'Supporter les alternatives de commande vocale',
            '4': 'Inclure des tutoriels pour apprendre les gestes disponibles',
          },
        },
      },
      draggable: {
        title: 'Glissable',
        description: 'Éléments glissables avec alternatives au clavier et retour approprié.',
        requirements: {
          A: {
            '1': 'Les éléments glissables ont des alternatives au clavier',
            '2': 'Les éléments glissables ont des étiquettes descriptives',
          },
          AA: {
            '1': 'Les éléments glissables offrent un contraste suffisant',
            '2': "Les éléments glissables annoncent les changements d'état aux lecteurs d'écran",
          },
          AAA: {
            '1': 'Les éléments glissables prennent en charge les méthodes de saisie personnalisées',
            '2': "Les éléments glissables fournissent un contexte détaillé pour les lecteurs d'écran",
          },
        },
      },
      language: {
        title: 'Langue',
        description:
          'Le support de langue accessible garantit que le contenu est compréhensible pour les utilisateurs ayant différents besoins linguistiques.',
        requirements: {
          A: {
            '1': 'Identifier les changements de langue dans le contenu',
            '2': "Éviter d'utiliser du contenu dépendant de la langue sans alternatives",
            '3': 'Fournir des traductions pour les instructions critiques',
          },
          AA: {
            '1': 'Supporter la détection automatique de langue pour la saisie utilisateur',
            '2': 'Fournir des mécanismes pour changer les paramètres de langue',
            '3': "S'assurer de la cohérence de la terminologie entre les langues",
            '4': 'Supporter le formatage approprié à la langue des nombres et dates',
          },
          AAA: {
            '1': "Fournir le contenu dans la langue préférée de l'utilisateur",
            '2': 'Supporter plusieurs préférences linguistiques par ordre de priorité',
            '3': "Inclure les variations dialectales régionales quand c'est approprié",
            '4': 'Fournir des alternatives en langue des signes pour le contenu clé',
          },
        },
      },
      comprehension: {
        title: 'Compréhension',
        description:
          "Support pour les utilisateurs ayant des difficultés de compréhension et des troubles d'apprentissage.",
        requirements: {
          A: {
            '1': 'Le contenu utilise un langage clair et simple',
            '2': 'Les concepts complexes ont des explications',
          },
          AA: {
            '1': 'Le contenu offre un contraste suffisant',
            '2': 'Le contenu prend en charge plusieurs niveaux de lecture',
          },
          AAA: {
            '1': 'Le contenu prend en charge les préférences de lecture personnalisées',
            '2': "Le contenu fournit des explications détaillées pour les lecteurs d'écran",
          },
        },
      },
      accordions: {
        title: 'Accordéons',
        description:
          'Les accordéons sont des sections de contenu pliables qui aident à organiser les informations de manière hiérarchique.',
        requirements: {
          A: {
            '1': "Fournir des étiquettes d'accessibilité claires pour l'en-tête de l'accordéon",
            '2': "Assurer une gestion appropriée du focus lors de l'expansion/réduction de l'accordéon",
            '3': "Utiliser des rôles sémantiques pour identifier les sections d'accordéon",
          },
          AA: {
            '1': "Ajouter des indications d'accessibilité appropriées pour les attentes d'interaction",
            '2': "S'assurer que l'ensemble de l'en-tête d'accordéon soit tactile avec une cible minimale de 44×44 points",
            '3': 'Inclure une indication de focus avec un contraste suffisant',
          },
          AAA: {
            '1': 'Permettre des raccourcis clavier pour une navigation rapide entre les accordéons',
            '2': "Fournir des actions d'accessibilité personnalisées pour une interaction avancée",
            '3': "Mémoriser les états développés/réduits entre les sessions pour la commodité de l'utilisateur",
          },
        },
      },
    },
  },
  errors: {
    networkError: 'Erreur de connexion réseau',
    unknownError: "Une erreur inconnue s'est produite",
    validationError: 'Veuillez vérifier votre saisie',
  },
};
