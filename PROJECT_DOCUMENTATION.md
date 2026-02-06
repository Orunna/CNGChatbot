# Calgary Newcomers Guide AI Chatbot - Project Documentation

## Executive Summary

This document provides comprehensive documentation for the Calgary Newcomers Guide (CNG) AI Chatbot Prototype. The project successfully delivers a functional AI-powered chatbot designed to enhance user experience on the CNG website by providing personalized program information through natural language interactions.

---

## 1. Project Objectives

### Primary Goal
Develop an AI chatbot prototype that can interact with users and provide tailored CNG program information based on their specific needs and questions.

### Success Criteria
- ✅ Functional chatbot with natural language understanding
- ✅ Real-time streaming responses for smooth user experience
- ✅ Clean, intuitive user interface
- ✅ Accurate information about CNG programs
- ✅ Scalable architecture for future enhancements
- ✅ Ready for user testing and feedback collection

---

## 2. Technical Implementation

### Architecture Overview

The chatbot follows a modern client-server architecture:

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   React     │  HTTP   │   Express   │   API   │  Anthropic  │
│  Frontend   │ ◄─────► │   Backend   │ ◄─────► │   Claude    │
│  (Client)   │   SSE   │  (Server)   │         │     AI      │
└─────────────┘         └─────────────┘         └─────────────┘
```

### Technology Decisions

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Frontend Framework | React + TypeScript | Industry standard, type-safe, component-based |
| Backend Framework | Express.js | Lightweight, flexible, excellent for APIs |
| AI Model | Claude Sonnet 4.5 | Balanced performance and cost, excellent reasoning |
| Data Validation | Zod | Runtime type safety, schema validation |
| Development Tool | Vite | Fast hot module replacement, modern build tool |
| Streaming | Server-Sent Events | Real-time updates, simple implementation |
| Storage (Prototype) | In-memory | Quick setup for prototyping, easy to migrate |

### Key Features Implemented

1. **Real-time Streaming Responses**
   - Uses SSE for character-by-character streaming
   - Provides immediate user feedback
   - Smooth, natural conversation flow

2. **Conversation Management**
   - Each session gets a unique conversation ID
   - Messages are stored with timestamps
   - Full conversation history maintained

3. **Context-Aware AI**
   - Custom system prompt with CNG-specific knowledge
   - Understands programs: employment, ESL, settlement, housing, youth
   - Warm, welcoming, culturally sensitive tone

4. **Type-Safe Data Flow**
   - Shared Zod schemas between frontend and backend
   - Runtime validation of all API data
   - TypeScript for compile-time type checking

---

## 3. Development Process

### Phase 1: Planning & Architecture (Completed)
- Analyzed CNG requirements and user needs
- Designed system architecture
- Selected appropriate technologies
- Created data models and API structure

### Phase 2: Core Implementation (Completed)
- Set up development environment
- Implemented backend API with Express
- Integrated Claude AI API
- Built React frontend interface
- Implemented streaming responses

### Phase 3: Refinement & Testing (Current)
- Created clean, professional UI
- Optimized response quality
- Prepared documentation
- Ready for user testing

### Phase 4: Future Enhancements (Planned)
- User testing and feedback collection
- Integration with Squarespace
- Persistent data storage
- Analytics and monitoring

---

## 4. Challenges & Solutions

### Challenge 1: Streaming Implementation
**Problem:** Needed real-time responses without waiting for complete AI generation  
**Solution:** Implemented Server-Sent Events with chunked streaming from Claude API  
**Impact:** Users see responses immediately, creating a natural conversation feel

### Challenge 2: CNG-Specific Knowledge
**Problem:** Generic AI wouldn't know CNG programs and services  
**Solution:** Created comprehensive system prompt with program details and tone guidelines  
**Impact:** Chatbot provides accurate, relevant, on-brand information

### Challenge 3: Type Safety Across Stack
**Problem:** Need consistency between frontend and backend data structures  
**Solution:** Shared Zod schemas provide runtime and compile-time type safety  
**Impact:** Eliminated entire class of runtime errors, faster development

### Challenge 4: Prototype vs. Production
**Problem:** Balance between quick prototype and production-ready code  
**Solution:** Used in-memory storage with interface-based design for easy migration  
**Impact:** Fast prototype development with clear path to production

---

## 5. User Testing Plan

### Testing Objectives
1. Evaluate chatbot accuracy and helpfulness
2. Assess user experience and interface usability
3. Identify common user questions and patterns
4. Discover edge cases and improvement opportunities

### Test Scenarios

#### Scenario 1: New Immigrant Seeking Employment Help
- **User Profile:** Recent immigrant, limited English
- **Test Flow:** Ask about job search assistance
- **Success Metrics:** Accurate program information, clear next steps

#### Scenario 2: Parent Looking for Youth Programs
- **User Profile:** Parent with teenage children
- **Test Flow:** Inquire about programs for newcomer youth
- **Success Metrics:** Relevant program details, age-appropriate options

#### Scenario 3: Professional Seeking Language Training
- **User Profile:** Skilled worker needing English improvement
- **Test Flow:** Ask about ESL classes and professional development
- **Success Metrics:** Program levels explained, registration guidance

#### Scenario 4: Family Needing Housing Information
- **User Profile:** Family of four seeking affordable housing
- **Test Flow:** Request housing assistance and resources
- **Success Metrics:** Relevant resources, community connections

### Data to Collect

**Quantitative Metrics:**
- Response time (average, median, p95)
- Conversation length (number of messages)
- Task completion rate
- Error frequency
- User satisfaction score (1-5 scale)

**Qualitative Feedback:**
- Ease of use ratings
- Information accuracy assessment
- Suggested improvements
- Feature requests
- Tone and friendliness evaluation

### Testing Protocol

1. **Pre-Test Briefing** (5 minutes)
   - Explain CNG services context
   - Describe testing purpose
   - Assure feedback is anonymous

2. **Guided Tasks** (10 minutes)
   - Complete 2-3 specific scenarios
   - Observer notes pain points
   - No intervention unless stuck

3. **Free Exploration** (5 minutes)
   - User asks own questions
   - Tests natural use cases
   - Reveals unexpected needs

4. **Post-Test Survey** (5 minutes)
   - Satisfaction rating
   - Specific feedback questions
   - Improvement suggestions

---

## 6. API Documentation

### Endpoints

#### POST `/api/conversations`
Create a new conversation session.

**Response:**
```json
{
  "conversationId": "1707254400000"
}
```

#### GET `/api/conversations/:id`
Retrieve conversation history.

**Response:**
```json
{
  "id": "1707254400000",
  "messages": [
    {
      "id": "1707254400001",
      "role": "user",
      "content": "What programs do you offer?",
      "timestamp": 1707254400001
    }
  ],
  "createdAt": 1707254400000
}
```

#### POST `/api/messages`
Send a message and receive streaming response.

**Request:**
```json
{
  "conversationId": "1707254400000",
  "content": "What programs do you offer?"
}
```

**Response:** Server-Sent Events stream
```
data: {"type":"chunk","content":"I"}
data: {"type":"chunk","content":"'d be"}
data: {"type":"chunk","content":" happy to"}
...
data: {"type":"done","message":{...}}
```

---

## 7. Deployment Considerations

### For Squarespace Integration

**Option 1: Embedded Widget**
- Host chatbot on separate subdomain
- Embed via iframe in Squarespace page
- Configure CORS appropriately

**Option 2: API Integration**
- Use Squarespace Custom Code blocks
- Call chatbot API endpoints
- Render responses in Squarespace layout

**Option 3: Standalone Page**
- Host chatbot on separate URL
- Link from Squarespace navigation
- Maintain consistent branding

### Infrastructure Requirements

**For Production:**
- Node.js hosting (Heroku, Railway, Render, or AWS)
- PostgreSQL or MongoDB database
- Environment variable management
- SSL certificate for HTTPS
- CDN for static assets (optional)

**Estimated Monthly Costs:**
- Hosting: $7-25/month (basic tier)
- Database: $0-10/month (free tier available)
- Claude API: Variable based on usage (~$0.003/1K tokens)
- Domain: $12/year (if separate domain needed)

---

## 8. Recommendations for Future Improvements

### Short-term (1-3 months)
1. **User Testing**
   - Conduct 10-15 user tests
   - Collect feedback and iterate
   - Refine system prompts based on common questions

2. **Analytics Integration**
   - Add Google Analytics or Mixpanel
   - Track conversation patterns
   - Monitor response quality

3. **Enhanced Error Handling**
   - Better error messages for users
   - Retry logic for API failures
   - Fallback responses

### Medium-term (3-6 months)
1. **Persistent Storage**
   - Migrate to PostgreSQL database
   - Store conversation history
   - Enable user accounts

2. **Multilingual Support**
   - Add support for common immigrant languages
   - Spanish, Mandarin, Arabic, Punjabi
   - Language detection and switching

3. **Program Database Integration**
   - Connect to live CNG program data
   - Real-time availability information
   - Automated updates

### Long-term (6-12 months)
1. **Advanced Features**
   - Appointment scheduling
   - Document upload and analysis
   - Resource recommendations

2. **Mobile App**
   - Native iOS and Android apps
   - Push notifications
   - Offline support

3. **Analytics Dashboard**
   - Admin interface for CNG staff
   - Usage statistics and trends
   - Popular questions and gaps

---

## 9. Success Metrics

### Key Performance Indicators (KPIs)

**User Engagement:**
- Target: 70%+ users send at least 3 messages
- Target: Average session length > 2 minutes
- Target: <10% bounce rate on chatbot page

**Accuracy & Helpfulness:**
- Target: 85%+ user satisfaction rating
- Target: <5% "I don't know" responses
- Target: 90%+ questions answered correctly

**Technical Performance:**
- Target: <2 second response start time
- Target: 99.5% uptime
- Target: <1% error rate

**Business Impact:**
- Target: 30% reduction in basic inquiry emails
- Target: Increased program registration
- Target: Improved user satisfaction scores

---

## 10. Conclusion

The Calgary Newcomers Guide AI Chatbot Prototype successfully achieves all primary deliverables:

✅ **Functional Prototype:** Fully operational chatbot with natural language capabilities  
✅ **Dynamic Information Display:** Tailored responses based on user input  
✅ **User-Friendly Interface:** Clean, intuitive design  
✅ **Integration-Ready:** Architecture supports Squarespace integration  
✅ **Testing Plan:** Comprehensive approach to validation  
✅ **Documentation:** Complete technical and user documentation

### Next Steps

1. **Immediate:** Set up testing environment and recruit test users
2. **Week 1:** Conduct initial user testing sessions
3. **Week 2-3:** Analyze feedback and implement improvements
4. **Week 4:** Prepare for Squarespace integration
5. **Ongoing:** Monitor usage and iterate based on real-world data

### Project Impact

This chatbot will enable CNG to:
- Serve more newcomers efficiently
- Provide 24/7 access to program information
- Reduce staff workload on basic inquiries
- Collect valuable data on newcomer needs
- Improve overall user experience

The project demonstrates practical application of AI technology to address real-world community needs while providing valuable learning opportunities in web development, AI integration, and user experience design.

---

**Document Version:** 1.0  
**Last Updated:** February 6, 2026  
**Project Status:** Prototype Complete - Ready for Testing
