const portfolioData = {
    profile: {
        name: "Crimson Tiger",
        role: "Product Manager & Strategic Planner",
        tagline: "12년간의 경험을 바탕으로 대규모 시스템 구축부터 구독 서비스, 글로벌 상품 기획까지 성공적인 프로젝트를 이끌어왔습니다.",
        about: "저는 사용자 중심의 제품 설계와 데이터 기반의 시장 분석을 통해 차별화된 기획 역량을 발휘하는 상품기획 전문가입니다. 지난 12년간 골프존 그룹에서 대규모 직영 시스템 구축, 신규 구독 서비스 론칭, 글로벌 시장 대응 등 다양한 프로젝트를 성공적으로 이끌며 PM으로서의 역량을 입증했습니다. 일정 관리, 예산 조율, 그리고 여러 부서와의 긴밀한 협업을 통해 항상 목표를 달성해왔습니다.",
        email: "contact@example.com", // Placeholder, user should update
        github: "https://github.com/crimsontiger84",
        linkedin: "#" // Placeholder
    },
    experience: [
        {
            role: "GDR 신규사업 및 상품기획 PM",
            company: "Golfzon", // Inferring company from context
            period: "2018.07 ~ 현재",
            description: "직영 인프라 시스템 구축 및 구독형 서비스 기획, 글로벌 상품 전략 수립",
            achievements: [
                "직영 인프라 시스템 구축: 전국 100개 직영 매장 대상 통합 운영 시스템(예약, 회원, 매출) 설계 및 론칭.",
                "구독형 서비스 GDR PRIME 기획/론칭: MAU 20만 명 대상 구독 서비스 설계 및 유료화, 신규 수익 모델 확보.",
                "High-End 스윙 분석기 상품화: 개인/실외용 고급 스윙 분석기 기획 및 글로벌 시장 대응 전략 수립."
            ]
        },
        {
            role: "신규사업 서비스 기획 및 마케팅",
            company: "Golfzon",
            period: "2015.07 ~ 2018.06",
            description: "가맹 전용 제품 론칭 및 마케팅 전략 수립",
            achievements: [
                "가맹 전용 TWOVISION 제품 론칭/운영: 신규 제품 설계부터 운영 안정화까지 전 과정 참여, 서비스 개선 주도.",
                "마케팅 전략 수립 및 실행: 광고, PPL, 프로모션 기획/실행을 통한 가맹점 신규 수익 창출 및 사용자 경험 강화."
            ]
        },
        {
            role: "골프 시뮬레이터 품질관리",
            company: "Golfzon",
            period: "2013.07 ~ 2015.06",
            description: "QA 리딩 및 프로세스 최적화",
            achievements: [
                "QA 리딩: Real/Vision 제품 QA 파트 리딩 및 테스트 케이스 작성.",
                "QA 프로세스 최적화: Usecase 기반 테스트 기획 및 실행으로 제품 품질 개선 및 서비스 안정화 기여."
            ]
        }
    ],
    projects: [
        {
            title: "직영 인프라 시스템 구축",
            period: "2018.07 ~ 2020.02",
            description: "100개 직영 매장 운영을 위한 HW/SW 통합 기획 및 전 과정 리딩을 통해 안정적인 론칭을 달성했습니다.",
            tags: ["System Design", "Operation Management", "Infra"]
        },
        {
            title: "구독형 서비스 GDR PRIME 론칭",
            period: "2020.07 ~ 2022.01",
            description: "구독 서비스 도입으로 연간 매출을 상승시키고 회원 만족도를 크게 개선하는 성과를 거두었습니다.",
            tags: ["Subscription", "Revenue Growth", "Service Planning"]
        },
        {
            title: "High-End 스윙 분석기 상품화",
            period: "2022.01 ~ 현재",
            description: "시뮬레이터 연계 고급 스윙 분석기를 기획하고 글로벌 시장 대응 전략을 수립하여 상품 경쟁력을 강화했습니다.",
            tags: ["Hardware", "Global Strategy", "Product Launch"]
        }
    ],
    skills: [
        "Product Management",
        "Strategic Planning",
        "Data Analysis",
        "Global Strategy",
        "System Design",
        "QA Process",
        "Marketing Strategy",
        "Team Leadership"
    ]
};

// Export for usage in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
