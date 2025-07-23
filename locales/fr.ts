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
      subtitle: "Découvrez toutes les fonctionnalités et les composants d'accessibilité disponibles"
    },
    settings: {
      title: 'paramètres',
      subtitle: "Configurez vos paramètres d'accessibilité",
      fontSize: {
        title: 'Taille du texte',
        description: 'Ajustez la taille du texte affiché dans l\'application',
        reset: 'Réinitialiser'
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
        intro: 'Posez-vous ces questions pour garantir l’accessibilité de votre application. Chaque point fait référence à un principe clé ou à une directive WCAG.',
        questions: {
          semanticMarkup: 'Balisage sémantique : Tous les éléments ont-ils le balisage sémantique approprié ?',
          inputLabels: 'Étiquettes de saisie : Chaque champ et groupe de champs a-t-il une étiquette descriptive ?',
          focus: 'Focus : Un indicateur est-il visible lors du focus clavier, et l’ordre de tabulation est-il logique ?',
          keyboard: 'Clavier : Tous les éléments interactifs sont-ils accessibles et activables au clavier ?',
          names: 'Noms : Tous les contrôles interactifs ont-ils un nom accessible et descriptif ?',
          roles: 'Rôles : Tous les widgets personnalisés ont-ils le bon rôle (ex : lien, bouton, onglet) ?',
          dynamicUpdates: 'Mises à jour dynamiques : Toutes les mises à jour (y compris les erreurs) sont-elles annoncées aux technologies d’assistance ?',
          colors: 'Couleurs : Le contraste des couleurs est-il suffisant ?',
          layouts: 'Mises en page : Les mises en page s’adaptent-elles à différentes largeurs de fenêtre et tailles de texte ?',
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
          iconInfo: 'Fournir des informations sur les icônes aux utilisateurs de technologies d’assistance',
          altText: 'Fournir un texte alternatif utile',
        },
        resources: {
          title: 'Ressources utiles',
          appt: 'Appt.org : Guide et statistiques sur l’accessibilité',
          silktide: 'Silktide : WCAG pour les débutants',
          w3c: 'W3C : Documentation officielle WCAG',
        },
      },
      successCriteria: {
        description: 'C’est ici que les choses deviennent concrètes. Les critères de succès sont les points de contrôle qui vous indiquent comment rendre votre site plus inclusif. Ils sont divisés en trois niveaux :',
        levelA: 'A (essentiels de base)',
        levelAA: 'AA (l’exigence légale dans la plupart des pays)',
        levelAAA: 'AAA (l’excellence ultime).',
      },
      principles: {
        perceivable: 'Perceptible : Les informations et composants de l’interface doivent être présentés de façon perceptible par tous.',
        operable: 'Opérable : Les composants de l’interface et la navigation doivent être utilisables.',
        understandable: 'Compréhensible : Les informations et le fonctionnement de l’interface doivent être compréhensibles.',
        robust: 'Robuste : Le contenu doit être suffisamment robuste pour être interprété de manière fiable par une grande variété d’agents utilisateurs, y compris les technologies d’assistance.',
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
      quickChecks: {
        title: 'Vérifications Rapides',
        description: "Outils d'audit et de validation d'accessibilité rapides",
      },
    },
    preferences: {
      title: "Préférences",
      description: "Personnalisez l'accessibilité et l'expérience de l'application",
      fontSize: {
        title: "Taille du texte",
        description: "Ajustez la taille du texte affiché dans l'application"
      },
      theme: {
        title: "Thème",
        description: "Passez du mode clair au mode sombre"
      },
      contrast: {
        title: "Mode contraste élevé",
        description: "Activez un schéma de couleurs à contraste élevé pour une meilleure visibilité"
      },
      reduceMotion: {
        title: "Réduire les animations",
        description: "Réduisez les effets de mouvement et les animations"
      },
      screenReader: {
        title: "Lecteur d'écran",
        description: "Améliore la compatibilité avec les lecteurs d'écran"
      },
      language: {
        title: "Langue",
        description: "Choisissez la langue de l'application"
      },
      textToSpeech: {
        title: "Synthèse vocale",
        description: "Activez la lecture vocale du contenu sélectionné"
      },
      haptics: {
        title: "Retour haptique",
        description: "Activer ou désactiver les vibrations"
      },
    }
  },
  errors: {
    networkError: 'Erreur de connexion réseau',
    unknownError: "Une erreur inconnue s'est produite",
    validationError: 'Veuillez vérifier votre saisie',
  },
};