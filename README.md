# Calgary Newcomers Guide (CNG) - AI Chatbot Prototype

A functional AI chatbot prototype designed to help newcomers to Calgary access information about CNG programs and services.

## 🎯 Project Overview

This prototype demonstrates an AI-powered chatbot that can:
- Answer questions about CNG programs and services
- Provide tailored program information based on user needs
- Offer guidance on employment, language learning, settlement, and community resources
- Deliver a user-friendly conversational interface

## 📋 Deliverables

✅ Fully functional AI chatbot prototype  
✅ Dynamic program information display based on user input  
✅ Clean, intuitive user interface  
✅ Real-time streaming responses  
✅ In-memory conversation storage (prototype-ready)  
✅ Integration-ready architecture

## 🛠️ Technology Stack

**Frontend:**
- React with TypeScript
- Vite for fast development
- CSS3 for styling

**Backend:**
- Node.js with Express
- TypeScript for type safety
- Server-Sent Events (SSE) for streaming

**AI:**
- Anthropic Claude API (Claude Sonnet 4.5)
- Custom system prompt for CNG context

**Data Validation:**
- Zod schemas for type-safe data handling

## 📁 Project Structure

```
cng-chatbot/
├── client/              # React frontend
│   └── src/
│       ├── App.tsx      # Main chat interface
│       ├── App.css      # Styles
│       ├── main.tsx     # React entry point
│       └── index.css    # Global styles
├── server/              # Express backend
│   ├── index.ts         # Server & API routes
│   ├── ai.ts            # Claude AI integration
│   └── storage.ts       # In-memory data storage
├── shared/              # Shared types
│   └── schema.ts        # Zod schemas
└── package.json         # Dependencies
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=your_actual_api_key_here
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 💡 Usage

1. Open the chatbot interface in your browser
2. Type questions about CNG programs and services
3. Receive real-time AI-powered responses
4. Examples of questions to ask:
   - "What employment services do you offer?"
   - "Do you have ESL classes?"
   - "How can you help me find housing in Calgary?"
   - "What programs are available for newcomer youth?"

## 🧪 Testing Recommendations

### User Testing Plan

**Test Scenarios:**
1. **Information Retrieval**
   - Ask about specific programs (employment, language, settlement)
   - Verify accuracy and relevance of responses

2. **User Experience**
   - Test conversation flow and naturalness
   - Evaluate response time and streaming performance
   - Assess interface usability on different devices

3. **Edge Cases**
   - Test with unclear or ambiguous questions
   - Verify graceful handling of out-of-scope queries
   - Check response quality for complex multi-part questions

**Metrics to Track:**
- Response accuracy
- User satisfaction scores
- Average conversation length
- Common question patterns
- Error rates

## 🔄 Future Improvements

### Recommended Enhancements:
1. **Persistent Storage:** Migrate from in-memory to database (PostgreSQL, MongoDB)
2. **User Authentication:** Add user accounts for personalized experiences
3. **Analytics Dashboard:** Track usage patterns and popular queries
4. **Multi-language Support:** Add support for common newcomer languages
5. **Integration:** Connect with Squarespace website
6. **Feedback System:** Allow users to rate responses
7. **Program Database:** Link to real-time CNG program information
8. **Appointment Booking:** Enable direct program registration

## 🏗️ Architecture Notes

### Streaming Implementation
The chatbot uses Server-Sent Events (SSE) for real-time streaming responses, providing a smooth user experience with immediate feedback.

### Type Safety
Zod schemas ensure data consistency between frontend and backend, reducing runtime errors.

### Scalability
The modular architecture allows easy migration from in-memory storage to persistent databases without major refactoring.

## 📊 Development Process

**Challenges Encountered:**
- Balancing response quality with speed
- Designing an intuitive UI for diverse user needs
- Structuring prompts for accurate CNG-specific information

**Solutions Implemented:**
- Used Claude Sonnet 4.5 for optimal performance
- Implemented streaming for perceived speed
- Created comprehensive system prompt with CNG context

## 🤝 Contributing

For questions or improvements, please contact the development team.

## 📄 License

This is a prototype developed for Calgary Newcomers Guide.

## 🙏 Acknowledgments

Developed as part of a learning project to enhance CNG's digital services and improve newcomer experience in Calgary.

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Status:** Prototype - Ready for Testing
