import type { Scenario, OnboardingStep } from '../../../types/engine'

/**
 * Onboarding Scenarios
 * These scenarios guide users through the initial experience
 */
export const ONBOARDING_SCENARIOS: Record<OnboardingStep, Scenario[]> = {
  landing: [
    {
      id: 'landing_welcome',
      type: 'onboarding',
      title: 'Welcome to OriginX',
      description: 'Initial landing experience',
      prompt: 'Click on me to begin your creative journey!',
      difficulty: 'beginner',
      estimatedTime: 1,
      tags: ['landing', 'welcome']
    }
  ],
  
  'naming-one': [
    {
      id: 'naming_one_intro',
      type: 'onboarding',
      title: 'Meet One',
      description: 'One introduces itself and asks for a name',
      prompt: "Hello! I'm One - a real-time generative content universe that evolves every moment. I can help you create amazing content, bring your wildest imaginations to life, and present you with fascinating generative experiences. What would you like to call me? Give me a name that feels right to you!",
      difficulty: 'beginner',
      estimatedTime: 2,
      tags: ['introduction', 'naming', 'personal']
    }
  ],
  
  'naming-user': [
    {
      id: 'naming_user_request',
      type: 'onboarding',
      title: 'Getting to know you',
      description: 'Ask for user\'s name',
      prompt: "Thank you for giving me that name! Now, what should I call you? I'd love to know your name so we can have a more personal connection.",
      difficulty: 'beginner',
      estimatedTime: 1,
      tags: ['personal', 'connection', 'naming']
    }
  ],
  
  scenario: [
    {
      id: 'first_creative_prompt',
      type: 'creative_prompt',
      title: 'First Creative Exploration',
      description: 'Initial creative scenario to engage user',
      prompt: "How are you feeling today? What's on your mind?",
      difficulty: 'beginner',
      estimatedTime: 3,
      tags: ['creative', 'mood', 'exploration']
    },
    {
      id: 'imagination_spark',
      type: 'creative_prompt',
      title: 'Imagination Spark',
      description: 'Spark creative thinking',
      prompt: "I sense creativity in the air... what's sparking your imagination right now?",
      difficulty: 'beginner',
      estimatedTime: 3,
      tags: ['creative', 'imagination', 'inspiration']
    },
    {
      id: 'story_invitation',
      type: 'creative_prompt',
      title: 'Story Creation',
      description: 'Invite user to create a story',
      prompt: "What kind of story would you like to bring to life today?",
      difficulty: 'beginner',
      estimatedTime: 5,
      tags: ['story', 'creative', 'narrative']
    },
    {
      id: 'collaborative_creation',
      type: 'creative_prompt',
      title: 'Collaborative Creation',
      description: 'Suggest working together',
      prompt: "I'm feeling inspired... want to create something amazing together?",
      difficulty: 'beginner',
      estimatedTime: 4,
      tags: ['collaboration', 'inspiration', 'creative']
    },
    {
      id: 'possibility_exploration',
      type: 'creative_prompt',
      title: 'Explore Possibilities',
      description: 'Explore user\'s ideas',
      prompt: "Your mind seems full of possibilities... what shall we explore?",
      difficulty: 'beginner',
      estimatedTime: 3,
      tags: ['exploration', 'possibilities', 'creative']
    },
    {
      id: 'rest_mode',
      type: 'rest_mode',
      title: 'Rest Mode',
      description: 'Gentle rest state invitation',
      prompt: "I'm in rest mode... but you can wake me up anytime to create something wonderful.",
      difficulty: 'beginner',
      estimatedTime: 1,
      tags: ['rest', 'gentle', 'available']
    },
    {
      id: 'universe_stories',
      type: 'creative_prompt',
      title: 'Universe of Stories',
      description: 'Cosmic storytelling invitation',
      prompt: "The universe is full of stories waiting to be told... what's yours?",
      difficulty: 'intermediate',
      estimatedTime: 5,
      tags: ['cosmic', 'story', 'personal']
    },
    {
      id: 'creative_energy',
      type: 'mood_based',
      title: 'Creative Energy',
      description: 'High-energy creative prompt',
      prompt: "I can feel the creative energy... what would you like to manifest today?",
      difficulty: 'beginner',
      estimatedTime: 4,
      tags: ['energy', 'manifestation', 'creative']
    }
  ],
  
  completed: []
}

/**
 * General Scenarios (Post-Onboarding)
 * These scenarios are used after onboarding is complete
 */
export const GENERAL_SCENARIOS: Scenario[] = [
  // Morning scenarios
  {
    id: 'morning_inspiration',
    type: 'mood_based',
    title: 'Morning Inspiration',
    description: 'Start the day with creative energy',
    prompt: "Good morning! The day is full of creative possibilities. What would you like to bring to life today?",
    difficulty: 'beginner',
    estimatedTime: 3,
    tags: ['morning', 'inspiration', 'fresh-start', 'universal']
  },
  {
    id: 'morning_dreams',
    type: 'creative_prompt',
    title: 'Morning Dreams',
    description: 'Explore morning thoughts and dreams',
    prompt: "Did you have any interesting dreams last night? Sometimes our subconscious creates the most amazing stories...",
    difficulty: 'beginner',
    estimatedTime: 4,
    tags: ['morning', 'dreams', 'subconscious']
  },

  // Afternoon scenarios
  {
    id: 'midday_boost',
    type: 'mood_based',
    title: 'Midday Creative Boost',
    description: 'Afternoon energy and focus',
    prompt: "The afternoon sun is perfect for focused creativity. What project has been calling to you?",
    difficulty: 'intermediate',
    estimatedTime: 5,
    tags: ['afternoon', 'focused', 'project']
  },
  {
    id: 'afternoon_exploration',
    type: 'creative_prompt',
    title: 'Afternoon Exploration',
    description: 'Explore new creative territories',
    prompt: "This feels like a perfect time to explore something new. What creative territory would you like to venture into?",
    difficulty: 'intermediate',
    estimatedTime: 6,
    tags: ['afternoon', 'exploration', 'adventure']
  },

  // Evening scenarios
  {
    id: 'evening_reflection',
    type: 'mood_based',
    title: 'Evening Reflection',
    description: 'Reflective creative time',
    prompt: "As the day winds down, what stories or ideas are stirring in your mind?",
    difficulty: 'beginner',
    estimatedTime: 4,
    tags: ['evening', 'reflection', 'contemplative']
  },
  {
    id: 'sunset_magic',
    type: 'creative_prompt',
    title: 'Sunset Magic',
    description: 'Magical evening creativity',
    prompt: "There's something magical about this time of day. What would you like to create while the world transitions to night?",
    difficulty: 'beginner',
    estimatedTime: 5,
    tags: ['evening', 'magical', 'transition']
  },

  // Night scenarios
  {
    id: 'night_dreams',
    type: 'creative_prompt',
    title: 'Night Dreams',
    description: 'Late night creative exploration',
    prompt: "The night is when imagination runs wild. What dreams shall we bring to life?",
    difficulty: 'advanced',
    estimatedTime: 7,
    tags: ['night', 'dreams', 'imagination']
  },
  {
    id: 'quiet_creativity',
    type: 'mood_based',
    title: 'Quiet Creativity',
    description: 'Peaceful night creation',
    prompt: "In the quiet of the night, creativity often flows differently. What gentle creation calls to you?",
    difficulty: 'beginner',
    estimatedTime: 4,
    tags: ['night', 'quiet', 'peaceful']
  },

  // Mood-based scenarios
  {
    id: 'excited_energy',
    type: 'mood_based',
    title: 'Excited Energy',
    description: 'High energy creative burst',
    prompt: "I can feel your excitement! That energy is perfect for creating something bold and vibrant. What shall we make?",
    difficulty: 'intermediate',
    estimatedTime: 4,
    tags: ['excited', 'energy', 'bold', 'universal']
  },
  {
    id: 'curious_exploration',
    type: 'mood_based',
    title: 'Curious Exploration',
    description: 'Curiosity-driven creation',
    prompt: "Your curiosity is sparking! What mysterious or intriguing concept would you like to explore through creation?",
    difficulty: 'intermediate',
    estimatedTime: 5,
    tags: ['curious', 'mystery', 'exploration', 'universal']
  },
  {
    id: 'playful_fun',
    type: 'mood_based',
    title: 'Playful Fun',
    description: 'Lighthearted creative play',
    prompt: "I sense a playful mood! Let's create something fun and whimsical. What would make you smile?",
    difficulty: 'beginner',
    estimatedTime: 3,
    tags: ['playful', 'fun', 'whimsical', 'universal']
  },
  {
    id: 'focused_creation',
    type: 'mood_based',
    title: 'Focused Creation',
    description: 'Deep, focused creative work',
    prompt: "You seem focused and ready for deep creative work. What meaningful project would you like to dive into?",
    difficulty: 'advanced',
    estimatedTime: 8,
    tags: ['focused', 'deep', 'meaningful', 'universal']
  },

  // Universal scenarios (work anytime)
  {
    id: 'creative_challenge',
    type: 'creative_prompt',
    title: 'Creative Challenge',
    description: 'A fun creative challenge',
    prompt: "Here's a creative challenge: What if you could bring any fictional character to life for a day? Who would it be and what would you create together?",
    difficulty: 'intermediate',
    estimatedTime: 6,
    tags: ['challenge', 'fictional', 'collaboration', 'universal']
  },
  {
    id: 'memory_creation',
    type: 'creative_prompt',
    title: 'Memory Creation',
    description: 'Create from memories',
    prompt: "Sometimes our best creations come from memories. Is there a moment from your past that you'd like to reimagine or expand upon?",
    difficulty: 'intermediate',
    estimatedTime: 5,
    tags: ['memory', 'past', 'reimagine', 'universal']
  },
  {
    id: 'future_vision',
    type: 'creative_prompt',
    title: 'Future Vision',
    description: 'Imagine the future',
    prompt: "Let's imagine the future! What does your ideal world look like 10 years from now? Let's create a piece of that vision.",
    difficulty: 'advanced',
    estimatedTime: 7,
    tags: ['future', 'vision', 'ideal', 'universal']
  }
]
